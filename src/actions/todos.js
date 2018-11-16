export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const EDIT_TODO_TITLE = 'EDIT_TODO_TITLE';

export function getTodos(project_id) { 
    return {
        type: GET_TODOS,
        request: {
            method: 'get',
            url: `/tasks/?project_id=${project_id}`,
        },
    };
};

export function addTodo(title, project_id) { 
    return {
        type: ADD_TODO,
        request: {
            method: 'post',
            url: `/tasks/?project_id=${project_id}&title=${title}`,
        },
    };
};

export function checkTodo(id, completed, project_id) {
    return {        
        type: CHECK_TODO,
        request: {            
            method: 'put',
            url: `/tasks/${id}/?project_id=${project_id}&completed=${completed}`,
        },
    };
};

export function deleteTodo(id, project_id) { 
    return {
        type: DELETE_TODO,
        request: {
            method: 'delete',
            url: `/tasks/${id}/?project_id=${project_id}`,  
        },
    };
};

export function editTodoTitle(id, title, project_id) { 
    return {
        type: EDIT_TODO_TITLE,
        request: {
            method: 'put',
            url: `/tasks/${id}/?project_id=${project_id}&title=${title}`,
        },
    };
};