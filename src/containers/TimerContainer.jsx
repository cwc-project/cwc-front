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
            checked: false,            
        };
        this.maxDeadlineYears = 10;   
    }

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
        this.toggle()
    }

    deadlineSet = event => {
        event.preventDefault();     
        this.dateValidation(); 
        const { date, time } = this.state;
        const deadlineLocal = new Date(`${date} ${time}`);       
        const deadline = deadlineLocal.toISOString();       

        if ( !this.state.dateInvalid && !this.state.timeInvalid && this.state.checked) { 
            this.timerEdit(deadline);  
            this.toggle();   
        };      
        this.setState({ checked: false });    
    }  

    handleChange = event => {         
        this.setState({ 
            [event.target.name]: event.target.value, 
            }, () => {
                this.dateValidation(); 
            }
        );           
    }

    dateValidation = () => {
        const { date } = this.state;
        const wrongFormat = 'incorrect date format';
        const wrongPeriod = 'this date is expired';
        const overMaximum = `deadline should not exceed ${this.maxDeadlineYears} years`;
        if(date) {
            const dateMs = Date.parse(date)
            const nowMs =  Date.parse(this.userDateFormat());
            const maxDateMs = Date.parse(this.maxDateYears(this.maxDeadlineYears));
            // switch (true) {
            //     case (dateMs >= nowMs) && (dateMs <= maxDateMs):
            //         this.setState({ 
            //             dateInvalid: false, 
            //             dateValidDecor: true,
            //         }); 
            //         break;
            //     case dateMs < nowMs:
            //         this.setState({ 
            //             dateInvalid: true,
            //             dateInvalidText: wrongPeriod,
            //         }); 
            //         break;
            //     case dateMs > maxDateMs:
            //         this.setState({
            //             dateInvalid: true,
            //             dateInvalidText: overMaximum, 
            //         });  
            //         break; 
            // };
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
                    }, this.timeValidation())   
            );
        } else {
            this.setState({
                dateInvalid: true,
                dateInvalidText: wrongFormat,
            });
        };
    }

    timeValidation = () => {
        const { date, time, dateInvalid } = this.state;
        const timeLagDisplay = this.userTimeFormat(this.timeLag(2));       
        const wrongFormat = `Please set time. For expamle: ${timeLagDisplay}`;
        const wrongPeriod = `Please increase deadline time. It should be not less than ${timeLagDisplay}`;         
        if(time) {
            if(!dateInvalid) {
                const deadlineLocal = new Date(`${date} ${time}`);
                const timeLag = this.timeLag(1);          
                (deadlineLocal <= timeLag) ? 
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

    maxDateYears = (year) => {
        const now = new Date();
        const date = now.setFullYear(now.getFullYear() + year);
        return this.userDateFormat(date);
    }        

    timerReset = () => {
        this.timerEdit(null);
    }
    
    timeLag(value) {
        const now = new Date();
        return now.setMinutes(now.getMinutes() + value); 
    }

    userDateFormat = date => {
        const dateFormat = date ? new Date(date) : new Date();
        const year = dateFormat.getFullYear();
        const month = (dateFormat.getMonth() + 1 > 9) ? (dateFormat.getMonth() + 1)  : '0' + (dateFormat.getMonth() + 1);
        const day = (dateFormat.getDate() > 9) ? dateFormat.getDate() : ('0' + dateFormat.getDate());
        return `${year}-${month}-${day}`;       
    }

    userTimeFormat = date => {
        const dateFormat = date ? new Date(date) : new Date();
        const hours = (dateFormat.getHours() > 9) ? dateFormat.getHours() : ('0' + dateFormat.getHours());;
        const minutes = (dateFormat.getMinutes() > 9) ? dateFormat.getMinutes()  : ('0' + dateFormat.getMinutes());
        return `${hours}:${minutes}`;       
    }

    timeLeftFormat(milliseconds) { 
        const totalSeconds = milliseconds / 1000;
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return days ? ( days + 'd ' + hours + 'h:' + minutes + 'm') : (hours ? hours + 'h:' + minutes + 'm' :  minutes + ':' + (seconds > 9 ? seconds : '0' + seconds));
    }

    outputDateFormat(deadline) { 
        const options = {
            year: "numeric",
            month: "short",
            weekday: "short",  
            day: "numeric", 
            hour: "2-digit",
            hour12: false,
            minute: "2-digit",
            timezone: 'UTC',            
        };
        const date = new Date(deadline);
        return date.toLocaleDateString("en-US", options);
    }
    
    render() {
        const { deadline, timeElapsed } = this.props;
        const { modal, splitButtonOpen,  dateInvalid, dateValidDecor, timeInvalid, dateInvalidText, time, date, timeValidDecor, timeInvalidText } = this.state;
        const timeLeft = this.timeLeftFormat(timeElapsed);        
        const outputDate = this.outputDateFormat(deadline);
        const minDate = this.userDateFormat();
        const maxDate = this.maxDateYears(this.maxDeadlineYears);
        // const timeLag = this.userTimeFormat(this.timeLag(2));
        // console.log(timeLag)

        
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
                minDate={minDate}
                maxDate={maxDate}
                deadline={deadline}
                timeLeft={timeLeft} 
                outputDate={outputDate}
                // timeLag={timeLag}
                onToggle={this.toggle}
                onToggleSplit={this.toggleSplit}
                onChange={this.handleChange}                 
                onDeadlineSet={this.deadlineSet}
                onTimerReset={this.timerReset}                
            />
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onSetTodoDeadline: (id, deadline, project_id) => dispatch(setTodoDeadline(id, deadline, project_id)),
    };
};

export default connect(null, mapDispatchToProps)(TimerContainer);