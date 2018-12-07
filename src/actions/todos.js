export const GET_TODOS = 'GET_TODOS';
export const LOCAL_REORDER_TODOS = 'LOCAL_REORDER_TODOS';
export const SERVER_TODOS_REORDER = 'SERVER_TODOS_REORDER';
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

export function reorderTodos(startIndex, endIndex) {
    return {
        type: LOCAL_REORDER_TODOS,
        startIndex,
        endIndex,
    };
};

export function serverTodosReorder(nposb, npose) {
    return {
        type: SERVER_TODOS_REORDER,
        request: {
            method: 'put',
            url: `/tasks/change_npos/?nposb=${nposb}&npose=${npose}`,
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

export function checkTodo(todo_id, completed, deadline, user_id) {
    return {        
        type: CHECK_TODO,
        request: {            
            method: 'put',
            url: `/tasks/${todo_id}/?completed=${completed}&deadline=${deadline}&user_id=${user_id}}`,
        },
    };
};

export function deleteTodo(todo_id, user_id) { 
    return {
        type: DELETE_TODO,
        request: {
            method: 'delete',
            url: `/tasks/${todo_id}/?user_id=${user_id}`,  
        },
    };
};

export function editTodoTitle(todo_id, title, user_id) { 
    return {
        type: EDIT_TODO_TITLE,
        request: {
            method: 'put',
            url: `/tasks/${todo_id}/?title=${title}&user_id=${user_id}`,
        },
    };
};

export function setTodoDeadline(todo_id, deadline, user_id) {
    return {
        type: SET_TODO_DEADLINE,
        request: {
            method: 'put',
            url: `/tasks/${todo_id}/?deadline=${deadline}&user_id=${user_id}`,
        },
    };
};