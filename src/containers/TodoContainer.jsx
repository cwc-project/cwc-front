import React, { PureComponent } from 'react';

import Todo from 'components/Todo';
import TodoEdit from 'components/TodoEdit';

export default class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            title: this.props.title,
            timeElapsed: null, 
        };       
    }; 

    componentDidMount() {  
        const { completed } = this.props; 
        if(this.props.deadline && !completed) {       
            this.tick();
        };
    };

    componentWillUnmount() {
        clearInterval(this.interval);  
    };

    componentDidUpdate(prevProps) {        
        if (this.props.deadline !== prevProps.deadline ) {  
            clearInterval(this.interval);         
            this.tick();
        };
    };

    elapsedTimeCounter = deadline => {
        const now = Date.now();                      
        const diff = deadline - now;                          
        if(diff > 0) {
            this.setState({ timeElapsed: diff, });
        } else {
            this.setState({ timeElapsed: 0, });
            clearInterval(this.interval);
        };       
    };

    tick = async () => {   
        const deadline  = new Date(this.props.deadline).getTime(); 
        await this.elapsedTimeCounter(deadline);
        if(this.state.timeElapsed > 0) {
            this.interval = setInterval(() => { 
                console.log('tick'); // доп инфа для контроля
                this.elapsedTimeCounter(deadline);  
            }, 1000);
        };
    };

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
    };

    handleChange = (event) => { 
        this.setState({ title: event.target.value, })
    };
    
    handleCheck = () => {
        const { id, onCheck} = this.props;   
        const completed = !this.props.completed;
        const now = new Date();
        const deadline = completed ? now.toISOString() : null;
        completed ? clearInterval(this.interval) : this.tick();        
        onCheck(id, completed, deadline);
    };

    handleEdit = () => {        
        this.setState({ editing: true, })
    };

    handleDelete = (event) => {
        event.preventDefault();
        const { id, onDelete} = this.props;
        onDelete(id);
    };  

    handleSave = (event) => {
        event.preventDefault();    
        const { id, onTodoTitleEdit } = this.props;
        const { title } = this.state;
        onTodoTitleEdit(id, title);
        this.setState({ editing: false, });      
    };

    renderDisplayTodo() {
        const { id, title, completed, deadline } = this.props;
        const { timeElapsed } = this.state;
        const outputDate = this.outputDateFormat(deadline);

        return (
            <Todo 
                id={id}
                title={title}
                completed={completed}
                deadline={deadline}       
                timeElapsed={timeElapsed}
                outputDate={outputDate}
                onCheck={this.handleCheck}
                onEdit={this.handleEdit}
            />
        );
    }

    renderEditTodo() {
        const { title } = this.state;

        return(
            <TodoEdit 
                title={title} 
                onDelete={this.handleDelete}
                onSave={this.handleSave}
                onChange={this.handleChange}
            />
        );
    }

    render() {
        const { editing } = this.state;
        return editing ? this.renderEditTodo() :  this.renderDisplayTodo();              
    };
};