export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const EDIT_TODO_TITLE = 'EDIT_TODO_TITLE';

export function getTodos() { 
    return {
        type: GET_TODOS,
        request: {
            method: 'get',
            // url: '/users/1/todos',
            url: '/projects',
        },
    };
};

export function addTodo(title) { 
    return {
        type: ADD_TODO,
        request: {
            method: 'post',
            // url: '/users/1/todos',
            url: '/projects',
            body: { title }, 
        },
    };
};

export function checkTodo(id, completed) {
    return {
        type: CHECK_TODO,
        request: {
            method: 'put',
            url: `/projects/${id}`,
            // url: `/todos/${id}?userId=1`,
            body: { completed, },
        },
    };
};

export function deleteTodo(id) { 
    return {
        type: DELETE_TODO,
        id,
        request: {
            method: 'delete',
            url: `/projects/${id}`,
            // url: `/todos/${id}?userId=1`,
        },
    };
};

export function editTodoTitle(id, title) { 
    return {
        type: EDIT_TODO_TITLE,
        request: {
            method: 'put',
            url: `/projects/${id}`,
            // url: `/todos/${id}?userId=1`,  
            body: { title },  
        },
    };
};