import './Heading.css';
import React from 'react';
import { Modal, ModalHeader, ModalBody, CardTitle, ModalFooter, Input, Button } from 'reactstrap';

export default function Heading (props) {
    const { title, modal, onToggle, onSubmit } = props;
    
    return (
        <CardTitle title="Click for set heading" onClick={onToggle} className="todos card-title">          
            <span className="project-title" id="new">{title}</span>           
            <Modal 
                isOpen={modal} 
                fade={false}
                toggle={onToggle}                     
            >
                <ModalHeader toggle={onToggle}>Переименование списка задач</ModalHeader>
                <ModalBody>                        
                    <Input 
                        type="textarea" 
                        defaultValue={title} 
                        // innerRef={input => this.title = input}  
                    />                 
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmit}>Применить изменения</Button>{' '}   
                    <Button color="secondary" onClick={onToggle}>Отмена</Button>                    
                </ModalFooter>
            </Modal>
        </CardTitle>
    );     
};

// export default class Heading extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: false,
//             title: 'CWC v.0',
//         };  
//     }

//     componentDidUpdate() {
//         const { modal } = this.state;
//         if(modal) this.title.focus(); 
//     }

//     toggle = () => {
//         this.setState({modal: !this.state.modal});                  
//     }

//     handleSubmit = () => {
//         const title = this.title.value;
//         if(title) this.setState({ title, });
        
//         this.toggle();
//     }

//     render() {
//         const { title } = this.state;

//         return (
//             <CardTitle title="Click for set heading" onClick={this.toggle} className="todos card-title">          
//                 <span className="project-title" id="new">{title}</span>           
//                 <Modal 
//                     isOpen={this.state.modal} 
//                     fade={false}
//                     toggle={this.toggle}                     
//                 >
//                     <ModalHeader toggle={this.toggle}>Переименование списка задач</ModalHeader>
//                     <ModalBody>                        
//                         <Input 
//                             type="textarea" 
//                             defaultValue={title} 
//                             innerRef={input => this.title = input}  
//                         />                 
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={this.handleSubmit}>Применить изменения</Button>{' '}   
//                         <Button color="secondary" onClick={this.toggle}>Отмена</Button>                    
//                     </ModalFooter>
//                 </Modal>
//             </CardTitle>
//         );
//     }   
// };