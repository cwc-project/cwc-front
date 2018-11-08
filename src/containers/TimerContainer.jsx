import React, { PureComponent } from 'react';
import Timer from 'components/Timer';

class TimerContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }

    handleEdit = () => {
        this.setState({ editing: !this.state.editing })
    }
    
    render() {
        const { editing } = this.state;
        return (
            <Timer 
                editing={editing} 
                onHandleEdit={this.handleEdit}           
            />
        );
    }
};

export default TimerContainer;