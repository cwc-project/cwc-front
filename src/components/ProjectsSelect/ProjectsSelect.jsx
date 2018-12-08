import './ProjectsSelect.css';
import React from 'react';
import PropTypes from 'prop-types';

import { ChevronsRight } from 'react-feather';
import { Form, Input, Badge, InputGroup, InputGroupAddon } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function ProjectsSelect(props) {
    const { projectId, projects, value, onChange, onSelect } = props;

    return(
        <Form className="d-flex"> 
            <InputGroup>
                <Badge className="project-badge">                
                    {projects.length}
                </Badge>      
                <Input 
                    className="rounded-0"
                    type="select"   
                    value={value || projectId}
                    name="select"
                    onChange={onChange}
                >
                    {projects.map(({ title }, idx) => <option key={idx} value={idx + 1} >{title}</option>)}              
                </Input>       
                <InputGroupAddon addonType="append">
                    <ButtonComponent 
                        className="choose-project-btn"
                        color="primary"
                        outline
                        icon={<ChevronsRight />}
                        onClick={onSelect}            
                    />
                </InputGroupAddon>
            </InputGroup>
            
        </Form>
    );
};

ProjectsSelect.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,       
    ]).isRequired,
    onChange: PropTypes.func.isRequired,    
    onSelect: PropTypes.func.isRequired,
};