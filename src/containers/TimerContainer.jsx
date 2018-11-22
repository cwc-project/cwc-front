import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setTodoDeadline } from '../actions';
import Timer from 'components/Timer';

class TimerContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false, 
            elapsed: 0,      
        };
        this.date = undefined;
        this.time = undefined;
    }
    componentDidMount() {  
        const { deadline } = this.props;
        if(deadline) {
            this.interval = setInterval(this.tick, 1000);
        };
    }

    tick = () => {       
        const now = Date.now();
        const deadline = new Date(this.props.deadline).getTime();
        const diff = deadline - now;            
        this.setState({ 
            elapsed: diff,           
        });
        console.log('tick', this.state.elapsed)
    }


    getDate = (elem) => this.date = elem;

    getTime = (elem) => this.time = elem;

    toggle = () => this.setState({modal: !this.state.modal});   

    
    

    deadlineSet = (event) => {
        event.preventDefault();
   debugger
        const { id, project_id, onSetTodoDeadline } = this.props;
        const date = this.date.value;
        const time = this.time.value        
        const deadlineLocal = new Date(`${date} ${time}`);
        const deadline = deadlineLocal.toISOString();
        if (deadline !== this.props.deadline && this.props.deadline !==null) {
            onSetTodoDeadline(id, deadline, project_id);
            this.toggle();
        } else {
            this.toggle();
        }
    }
  
    handleEdit = () => this.setState({ defaultIco: !this.state.defaultIco, });

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value, });
        console.log(this.state);
    }
    
    render() {
        const { deadline } = this.props;
        const { modal, date, time } = this.state;
        return (
            <Timer   
                modal={modal}
                time={time}
                date={date}
                deadline={deadline}
                onToggle={this.toggle}  
                onChange={this.handleChange}  
                onHandleEdit={this.handleEdit}   
                onDeadlineSet={this.deadlineSet}
                onGetDate={this.getDate}
                onGetTime={this.getTime}       
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