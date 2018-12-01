import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setTodoDeadline } from '../actions';
import Timer from 'components/Timer';

class TimerContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,            
            splitButtonOpen: false,  
            date: this.userDateFormat(this.props.deadline),
            time: this.userTimeFormat(this.props.deadline),  
            dateInvalid: false, 
            timeInvalid: false,
            dateInvalidText: '',   
            timeInvalidText: '',  
            dateValidDecor: false,
            timeValidDecor: false,   
        };
        this.maxDeadlineYears = 10;   
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            date: this.userDateFormat(this.props.deadline),
            time: this.userTimeFormat(this.props.deadline),
            dateValidDecor: false,
            timeValidDecor: false,
        });
    };   

    toggleSplit = () => this.setState({ splitButtonOpen: !this.state.splitButtonOpen, });

    timerEdit = deadline => {
        const { id, project_id, onSetTodoDeadline } = this.props;
        onSetTodoDeadline(id, deadline, project_id);
        this.toggle();
    };

     deadlineSet = async event => {
        event.preventDefault();
        await this.dateValidation(); 
        await this.timeValidation(); 
        const { date, time, dateInvalid, timeInvalid } = this.state;       
        if ( !dateInvalid && !timeInvalid) { 
            const deadlineLocal = new Date(`${date} ${time}`);       
            const deadline = deadlineLocal.toISOString();   
            this.timerEdit(deadline);    
        }; 
    };  

    handleChange = event => {         
        this.setState({ 
            [event.target.name]: event.target.value, 
            }, () => {
                this.dateValidation(); 
                this.timeValidation();
            }
        );           
    };

    dateValidation = () => {
        const { date } = this.state;
        const wrongFormat = 'incorrect date format';
        const wrongPeriod = 'this date is expired';
        const overMaximum = `deadline should not exceed ${this.maxDeadlineYears} years`;
        if(date) {
            const dateMs = Date.parse(date)
            const nowMs =  Date.parse(this.userDateFormat());
            const maxDateMs = Date.parse(this.maxDateYears(this.maxDeadlineYears));

            dateMs < nowMs ? 
                this.setState({
                    dateInvalid: true,
                    dateInvalidText: wrongPeriod,
                })
            : 
                ( dateMs > maxDateMs ? 
                    this.setState({
                        dateInvalid: true,
                        dateInvalidText: overMaximum,
                    })           
                :    
                    this.setState({ 
                        dateInvalid: false, 
                        dateValidDecor: true,
                        checked: true,
                    })   
            );
        } else {
            this.setState({
                dateInvalid: true,
                dateInvalidText: wrongFormat,
            });
        };
    };

    timeValidation = () => {
        const { date, time } = this.state;
        const timeLagDisplay = this.userTimeFormat(this.timeLag(2));       
        const wrongFormat = `Please set time. For expamle: ${timeLagDisplay}`;
        const wrongPeriod = `Please increase deadline time. It should be not less than ${timeLagDisplay}`;         
        if(time) {
            const nowDate = this.userDateFormat(new Date());
            if(nowDate === date) {
                const deadlineLocal = new Date(`${date} ${time}`);
                const timeLag = this.timeLag(1);  

                deadlineLocal <= timeLag ? 
                    this.setState({
                        timeInvalid: true,
                        timeInvalidText: wrongPeriod,
                    })
                :
                    this.setState({ 
                        timeInvalid: false,
                        timeValidDecor: true,
                    });   
            } else {
                this.setState({ 
                    timeInvalid: false,
                    timeValidDecor: true,
                });   
            };   
        } else {
            this.setState({ 
                timeInvalid: true,
                timeInvalidText: wrongFormat,
            });   
        };        
    };

    maxDateYears = year => {
        const now = new Date();
        const date = now.setFullYear(now.getFullYear() + year);
        return this.userDateFormat(date);
    };        

    timerReset = () => {
        this.timerEdit(null);
    };
    
    timeLag(value) {
        const now = new Date();
        return now.setMinutes(now.getMinutes() + value); 
    };

    timerWarning(deadline) {
        const hour = 3600000;
        return Date.parse(deadline) - Date.now() - hour < 0 ? true : false;
    }

    userDateFormat = date => {
        const dateFormat = date ? new Date(date) : new Date();
        const year = dateFormat.getFullYear();
        const month = (dateFormat.getMonth() + 1 > 9) ? (dateFormat.getMonth() + 1)  : '0' + (dateFormat.getMonth() + 1);
        const day = (dateFormat.getDate() > 9) ? dateFormat.getDate() : ('0' + dateFormat.getDate());
        return `${year}-${month}-${day}`;       
    };

    userTimeFormat = date => {
        const dateFormat = date ? new Date(date) : new Date();
        const hours = (dateFormat.getHours() > 9) ? dateFormat.getHours() : ('0' + dateFormat.getHours());;
        const minutes = (dateFormat.getMinutes() > 9) ? dateFormat.getMinutes() : ('0' + dateFormat.getMinutes());
        return `${hours}:${minutes}`;       
    };

    timeLeftFormat(milliseconds) { 
        let resp =  window.innerWidth;
        window.addEventListener('resize', () => {
            
            resp = window.innerWidth
            console.log(resp)
        });
        const respa = resp > 479;
        const totalSeconds = milliseconds / 1000;
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = Math.floor(totalSeconds % 60);
        if(respa) {
            return days ? ( days + 'd ' + hours + 'h:' + minutes + 'm') : (hours ? hours + 'h:' + minutes + 'm' :  minutes + ':' + (seconds > 9 ? seconds : '0' + seconds));
        } else {
            return days ? ( days + 'd ' + hours + 'h') : (hours ? hours + 'h:' + minutes + 'm' :  minutes + ':' + (seconds > 9 ? seconds : '0' + seconds));
        }
           
    };
    
    render() {

        // const resp = window.innerWidth > 479;
        const { completed, deadline, timeElapsed, outputDate } = this.props;
        const { modal, splitButtonOpen,  dateInvalid, dateValidDecor, timeInvalid, dateInvalidText, time, date, timeValidDecor, timeInvalidText } = this.state;
        const timeLeft = this.timeLeftFormat(timeElapsed);     
        const minDate = this.userDateFormat();
        const maxDate = this.maxDateYears(this.maxDeadlineYears);
        const timerWarning = this.timerWarning(deadline);
        
        return (
            <Timer 
                modal={modal}               
                splitButtonOpen={splitButtonOpen}              
                date={date}
                time={time}
                dateInvalid={dateInvalid}     
                timeInvalid={timeInvalid}
                dateValidDecor={dateValidDecor}
                timeValidDecor={timeValidDecor}
                dateInvalidText={dateInvalidText}
                timeInvalidText={timeInvalidText}  
                completed={completed} 
                minDate={minDate}
                maxDate={maxDate}
                deadline={deadline}
                timeElapsed={timeElapsed}
                timeLeft={timeLeft} 
                outputDate={outputDate}
                timerWarning={timerWarning}
                onToggle={this.toggle}
                onToggleSplit={this.toggleSplit}
                onChange={this.handleChange}                 
                onDeadlineSet={this.deadlineSet}
                onTimerReset={this.timerReset}                
            />
        );
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onSetTodoDeadline: (id, deadline, project_id) => dispatch(setTodoDeadline(id, deadline, project_id)),
    };
};

export default connect(null, mapDispatchToProps)(TimerContainer);