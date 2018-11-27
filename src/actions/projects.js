export const GET_PROJECTS = 'GET_PROJECTS';
export const EDIT_PROJECT_TITLE = 'EDIT_PROJECT_TITLE';
export const PICK_PROJECT = 'PICK_PROJECT';
export let project_id = null;

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

// export function pickProject(projects, index) {
//     return {
//         type: PICK_PROJECT,
//         projects,
//         index,
//     };
// };