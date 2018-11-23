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
            elapsed: 0,      
        };
        this.date = undefined;
        this.time = undefined;
        this.deadline = this.props.deadline ? new Date(this.props.deadline).getTime() : undefined;
    }

    componentDidMount() { 
 
        // const { deadline } = this.props;
        // if(this.deadline && this.state.elapsed === 0) {
            // console.log(this.props.deadline)
            this.interval = setInterval(this.tick, 1000);
        // };
    }

    toggle = () => this.setState({modal: !this.state.modal});   

    toggleSplit = () => this.setState({ splitButtonOpen: !this.state.splitButtonOpen, });

    getDate = (elem) => this.date = elem;

    getTime = (elem) => this.time = elem;

    focusDate = () => this.date.focus();

    focusTime = () => this.time.focus();

    tick = () => {
        const now = Date.now();
        const deadline = new Date(this.props.deadline).getTime();
        const diff = deadline - now; 
        // console.log(diff)
        if(diff > 0) {
            this.setState({ 
                elapsed: diff,           
            });
        } else {
            this.setState({ 
                elapsed: null,           
            });
        };
    }

    deadlineSet = (event) => {
        event.preventDefault();
        const { id, project_id, onSetTodoDeadline } = this.props;
        const date = this.date.value;
        const time = this.time.value        
        const deadlineLocal = new Date(`${date} ${time}`);
        const deadline = deadlineLocal.toISOString();
        if (deadline !== this.props.deadline)            
            onSetTodoDeadline(id, deadline, project_id);          
        this.toggle();
    }

    timeLeftFormat(milliseconds) { 
        const totalSeconds = milliseconds / 1000;
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        return `${days}d ${hours}h:${minutes}m`
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
        const { deadline } = this.props;
        const { modal, splitButtonOpen, elapsed, } = this.state;
        const timeLeft = this.timeLeftFormat(elapsed);
        const outputDate = this.outputDateFormat(deadline);
        
        return (
            <Timer   
                modal={modal}               
                splitButtonOpen={splitButtonOpen}
                onToggle={this.toggle}               
                onToggleSplit={this.toggleSplit}
                deadline={deadline}                
                onDeadlineSet={this.deadlineSet}
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