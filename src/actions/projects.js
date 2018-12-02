export const GET_PROJECTS = 'GET_PROJECTS';
export const EDIT_PROJECT_TITLE = 'EDIT_PROJECT_TITLE';
export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export function getProjects(user_id) { 
    return {
        type: GET_PROJECTS,
        request: {
            method: 'get',
            url: `/projects/?user_id=${user_id}`,
        },
    };
};

export function editProjectTitle(project_id, title) { 
    return {        
        type: EDIT_PROJECT_TITLE,
        request: {
            method: 'put',
            url: `/projects/${project_id}/?title=${title}`,
        },
    };
};

export function addProject(title, user_id) { 
    return {        
        type: ADD_PROJECT,
        request: {
            method: 'post',
            url: `/projects/?title=${title}&user_id=${user_id}`,
        },
    };
};

export function deleteProject(project_id) { 
    return {        
        type: DELETE_PROJECT,
        request: {
            method: 'delete',
            url: `/projects/${project_id}`,
        },
    };
};