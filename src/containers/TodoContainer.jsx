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
    } 

    componentDidMount() {  
        if(this.props.deadline) {       
            this.tick();
        };
    }

    componentWillUnmount() {
        clearInterval(this.interval);  
    }

    componentDidUpdate(prevProps) {        
        if (this.props.deadline !== prevProps.deadline) {  
            clearInterval(this.interval);         
            this.tick();
        };
    }

    elapsedTimeCounter = deadline => {
        const now = Date.now();                      
        const diff = deadline - now;                              
        if(diff > 0) {
            this.setState({ timeElapsed: diff, });
        } else {
            this.setState({ timeElapsed: 0, });
            clearInterval(this.interval);
        };       
    }

    tick = () => {   
        // const start = Date.now();     
        const deadline  = new Date(this.props.deadline).getTime(); 
        this.elapsedTimeCounter(deadline);
        if(this.state.timeElapsed > 0) {
            this.interval = setInterval(() => { 
                console.log('tick'); // доп инфа
                this.elapsedTimeCounter(deadline);  
            }, 1000);
        };       
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
    };

    handleChange = (event) => { 
        this.setState({ title: event.target.value, })
    }
    
    handleCheck = () => {
        const { id, onCheck, project_id } = this.props;   
        const completed = !this.props.completed;        
        onCheck(id, completed, project_id);
    }

    handleEdit = () => {        
        this.setState({ editing: true, })
    }

    handleDelete = (event) => {
        event.preventDefault();
        const { id, onDelete, project_id} = this.props;
        onDelete(id, project_id);
    }    

    handleSave = (event) => {
        event.preventDefault();    
        const { id, onTodoTitleEdit, project_id } = this.props;
        const { title } = this.state;
        onTodoTitleEdit(id, title, project_id);
        this.setState({ editing: false, });      
    }

    renderDisplayTodo() {
        const { id, title, completed, deadline, project_id } = this.props;
        const { timeElapsed } = this.state;
        const outputDate = this.outputDateFormat(deadline);

        return (
            <Todo 
                id={id}
                title={title}
                completed={completed}
                deadline={deadline}
                project_id={project_id}
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
    }
};