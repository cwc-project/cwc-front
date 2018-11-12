import './Heading.css';
import React, { PureComponent } from 'react';
import { Modal, ModalHeader, ModalBody, CardTitle, Form, ModalFooter, Input, Button } from 'reactstrap';

export default class Heading extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: 'CWC v.0'
        };       
    }

    toggle = () => this.setState({modal: !this.state.modal})

    handleSubmit = () => {
        debugger
        const title = this._projectTitle.value;
        this.setState({ modal: !this.state.modal, title: title,  });
    }
    handleChange = (event) => this.setState({ [event.target.name]: event.target.value, })

    render() {
        const { title } = this.state;
        return (
            <CardTitle>          
                <span className="project-title" title="Click for set heading" onClick={this.toggle}>{title}</span>           
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Переименование списка задач</ModalHeader>
                    <ModalBody>                        
                        <Input onChange={this.handleChange} type="textarea" name="title" id="exampleText" defaultValue={title} />                     
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={this.handleSubmit}>Применить изменения</Button>{' '}                        */}
                    </ModalFooter>
                </Modal>
            </CardTitle>
        );
    }   
};