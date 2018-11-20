import React, { PureComponent } from 'react';
import Timer from 'components/Timer';

class TimerContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            defaultIco: true,
            modal: false,
            deadline: "2018-11-20T20:33",
        };
    }

    toggle = () => this.setState({modal: !this.state.modal});         
    
    timeSet = (event) => {
        this.setState({[event.target.name]: event.target.value, });
        console.log(this.state.deadline)
    }
  
    handleEdit = () => this.setState({ defaultIco: !this.state.defaultIco, });
    
    render() {
        const { defaultIco, modal, deadline } = this.state;
        return (
            <Timer 
                defaultIco={defaultIco} 
                modal={modal}
                deadline={deadline}
                onToggle={this.toggle}    
                onHandleEdit={this.handleEdit}   
                onTimeSet={this.timeSet}           
            />
        );
    }
};

export default TimerContainer;