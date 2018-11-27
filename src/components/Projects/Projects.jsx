import React from 'react';
import { Link } from 'react-router-dom';

import { ChevronsRight } from 'react-feather';
import { Container, Form, FormGroup, CustomInput, Label } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function(props) {
    const { projects } = props;
    console.log(projects)
    return(
        <Container>
            <Form>
                <FormGroup>
                <Label for="exampleCustomSelect">Custom Select</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                    {projects.map((project, idx) => <option key={idx}>{project.title}</option>)}
                        {/* <option>Value 1</option>
                        <option>Value 2</option> */}
                    </CustomInput>
                </FormGroup>
                <ButtonComponent 
                    className="choose-project-btn"
                    icon={<ChevronsRight/>}
                />
            </Form>
        </Container>
    );
};