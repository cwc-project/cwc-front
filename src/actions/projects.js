export const GET_PROJECTS = 'GET_PROJECTS';;
export const EDIT_PROJECT_TITLE = 'EDIT_PROJECT_TITLE';

export function getProjects() { 
    return {
        type: GET_PROJECTS,
        request: {
            method: 'get',
            url: '/projects',//пока будет использовать только один проект
        },
    };
};

export function editProjectTitle(id, title) {   
    return {        
        type: EDIT_PROJECT_TITLE,
        request: {
            method: 'put',
            url: `/projects/${id}/?title=${title}`,
        },
    };
};