import './Projects.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { ChevronsRight } from 'react-feather';
import { Container, Form, FormGroup, CustomInput, Label, Input } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';
import ProjectContainer from 'containers/ProjectContainer';

export default function(props) {
    const { projects, value, onChange, onSelect } = props;  

    return(
        <Container  >
            <Form
            // onSubmit={onSelect}
            >
                <Label for="exampleCustomSelect">Select project</Label>
                    <div className="projects-form">
                    <Input 
                        type="select" 
                        value={value}
                        name="select"
                        onChange={onChange}
                    >
                        {projects ? 
                            projects.map((project, idx) => <option key={idx} value={idx + 1} >{project.title}</option>)
                        :
                            <option value="" disabled>There are no projects</option>}
                    </Input>
                    

                <ButtonComponent 
                    className="choose-project-btn"
                    color="secondary"
                    outline
                    icon={<ChevronsRight/>}
                    onClick={onSelect}
                   
                />
                </div>
            </Form>
            <Link to='/projects/test'>Test</Link>
            <hr/>
            <Route path='/projects/:projectId' component={ProjectContainer} />
        </Container>
    );
};

  // function selected (e) {
       
    //     console.log(`${e.target.value} `)
    // }
    // function changeFunc() {
    //     // var selectBox = document.getElementById("selectBox");
    //     // var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    //     // console.log(selectedValue);
    //    }