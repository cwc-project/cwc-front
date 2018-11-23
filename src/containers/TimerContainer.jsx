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
            correct: true, 
        };
        this.date = undefined;
        this.time = undefined;       
    }

    toggle = () => this.setState({modal: !this.state.modal});   

    toggleSplit = () => this.setState({ splitButtonOpen: !this.state.splitButtonOpen, });

    getDate = elem => this.date = elem;

    getTime = elem => this.time = elem;

    focusDate = () => this.date.focus();

    focusTime = () => this.time.focus();

    timerEdit = deadline => {
        const { id, project_id, onSetTodoDeadline } = this.props;
        onSetTodoDeadline(id, deadline, project_id);
        this.toggle()
    }

    deadlineSet = (event) => {
        event.preventDefault();
        const date = this.date.value;
        const time = this.time.value;
        if(date === '') {      
            alert('please set valid date')
        } else {
            const deadlineLocal = new Date(`${date} ${time}`);        
            const now = new Date();
            const timeLag = now.setMinutes(now.getMinutes() + 1)
       
            if(deadlineLocal < timeLag) {
                alert(' minimum deadline term shoud be one minute beyond of present time ')
            } else {
                const deadline = deadlineLocal.toISOString();
                if (deadline !== this.props.deadline) 
                    this.timerEdit(deadline);     
            };     
        }
       
    }

    timerReset = () => {
        this.timerEdit(null);
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
        const { modal, splitButtonOpen, correct } = this.state;
        const timeLeft = this.timeLeftFormat(timeElapsed);
        const outputDate = this.outputDateFormat(deadline);
        
        return (
            <Timer   
                modal={modal}               
                splitButtonOpen={splitButtonOpen}
                onToggle={this.toggle}  
                correct={correct}             
                onToggleSplit={this.toggleSplit}
                deadline={deadline}                
                onDeadlineSet={this.deadlineSet}
                onTimerReset={this.timerReset}
                onGetDate={this.getDate}
                onGetTime={this.getTime} 
                onFocusDate={this.focusDate}  
                onFocusTime={this.focusTime}  
                timeLeft={timeLeft} 
                outputDate={outputDate}
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