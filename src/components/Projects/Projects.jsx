import React from 'react';

import { ChevronsRight } from 'react-feather';
import { Container, Form, FormGroup, CustomInput, Label } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function(props) {
    const { projects } = props;
    function selected (e) {
       
        console.log(`${e.target.value} `)
    }
    // function changeFunc() {
    //     // var selectBox = document.getElementById("selectBox");
    //     // var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    //     // console.log(selectedValue);
    //    }

    return(
        <Container>
            <Form>
                <FormGroup>
                <Label for="exampleCustomSelect">Choose project</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect" onChange={selected} autoFocus onLoad={selected} >
                        {projects.map((project, idx) => <option key={idx} id={idx} value={project.id} >{project.title}</option>)}
                    </CustomInput>
                </FormGroup>
                <ButtonComponent 
                    className="choose-project-btn"
                    icon={<ChevronsRight/>}
                />
            </Form>
            <button>target value</button>
        </Container>
    );
};