import React, { PureComponent } from 'react';
import { Draggable } from 'react-beautiful-dnd';

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
        const { user_id, id: todo_id, onCheck } = this.props;           
        const completed = !this.props.completed;
        const now = new Date();
        const deadline = completed ? now.toISOString() : null;
        completed ? clearInterval(this.interval) : this.tick();        
        onCheck(todo_id, completed, deadline, user_id);
    };

    handleEdit = () => {        
        this.setState({ editing: true, });
    };

    handleDelete = event => {        
        const { user_id, id: todo_id, onDelete} = this.props;
        onDelete(todo_id, user_id);
        event.preventDefault();
    };  

    handleSave = event => {           
        const { user_id, id: todo_id, onTodoTitleEdit } = this.props;
        const { title } = this.state;
        onTodoTitleEdit(todo_id, title, user_id);
        this.setState({ editing: false, });   
        event.preventDefault();    
    };

    renderDisplayTodo() {
        const { user_id, id, title, completed, deadline } = this.props;
        const { timeElapsed } = this.state;
        const outputDate = this.outputDateFormat(deadline);

        return (
            <Todo 
                id={id}
                title={title}
                completed={completed}
                deadline={deadline}   
                user_id={user_id}    
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