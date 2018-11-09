export const GET_TODOS = 'GET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';

export function getTodos() { 
    return {
        type: GET_TODOS,
        request: {
            method: 'get',
            url: '/todos',
            // url: '/projects',
        }
    };
};

//JUST STATE FUNCTIONS for show
export function deleteTodo(id) { 
    return {
        type: DELETE_TODO,
        id,
        // request: {
        //     method: 'delete',
        //     url: '/todos',
        //     // url: '/projects',
        // }
    };
};