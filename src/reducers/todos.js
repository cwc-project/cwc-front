import { GET_TODOS, DELETE_TODO, CHECK_TODO, EDIT_TODO_TITLE } from '../actions';

function todoReducer (state = {}, action) {
    switch (action.type) {
        case CHECK_TODO:
            if(state.id !== action.data.id) {
                return state;
            }
        return action.data;
       
        case EDIT_TODO_TITLE:    
            if(state.id !== action.data.id) {
                return state;
            }
            return action.data;
    }
};

export default function reducer(state={todos: [], fetching: false}, action) {
    switch(action.type) {
        case `${GET_TODOS}_REQUEST`:      
            return {...state, fetching: true, };

        case GET_TODOS:
            return {...state, todos: action.data, fetching: false, };
        
        case DELETE_TODO:           
            const index = state.todos.findIndex(todo => todo.id === action.id)
            return {
                ...state, 
                todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)],
                fetching: false, 
            }

        case CHECK_TODO:
            return {...state, todos: state.todos.map(todo => todoReducer(todo, action)), fetching: false, };

        case EDIT_TODO_TITLE:    
            return {...state, todos: state.todos.map(todo => todoReducer(todo, action)), fetching: false, };

        default:
            return state;
    };
};