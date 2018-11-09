import { GET_TODOS, DELETE_TODO, } from '../actions';

export default function reducer(state={todos: [], fetching: false}, action) {
    switch(action.type) {
        case `${GET_TODOS}_REQUEST`:      
            return {...state, fetching: true, };

        case GET_TODOS:
            return {...state, todos: action.data, fetching: false, };
        
        case DELETE_TODO:
            debugger
            const index = state.todos.findIndex(todo => todo.id === action.id)
            return {
                ...state, 
                todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)],
                fetching: false, 
            }

        default:
            return state;
    };
};