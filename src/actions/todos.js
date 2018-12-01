export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const EDIT_TODO_TITLE = 'EDIT_TODO_TITLE';
export const SET_TODO_DEADLINE = 'SET_TODO_DEADLINE';

export function getTodos(project_id) { 
    return {
        type: GET_TODOS,
        request: {
            method: 'get',
            url: `/tasks/?project_id=${project_id}`,
        },
    };
};

export function addTodo(title, project_id, user_id) { 
    return {
        type: ADD_TODO,
        request: {
            method: 'post',
            url: `/tasks/?project_id=${project_id}&title=${title}&user_id=${user_id}`,
        },
    };
};

export function checkTodo(id, completed, deadline) {
    return {        
        type: CHECK_TODO,
        request: {            
            method: 'put',
            url: `/tasks/${id}/?completed=${completed}&deadline=${deadline}`,
        },
    };
};

export function deleteTodo(id) { 
    return {
        type: DELETE_TODO,
        request: {
            method: 'delete',
            url: `/tasks/${id}`,  
        },
    };
};

export function editTodoTitle(id, title) { 
    return {
        type: EDIT_TODO_TITLE,
        request: {
            method: 'put',
            url: `/tasks/${id}/?title=${title}`,
        },
    };
};

export function setTodoDeadline(id, deadline) {
    return {
        type: SET_TODO_DEADLINE,
        request: {
            method: 'put',
            url: `/tasks/${id}/?deadline=${deadline}`,
        },
    };
};