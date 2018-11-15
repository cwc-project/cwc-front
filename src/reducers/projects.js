import { GET_TODOS, ADD_TODO, DELETE_TODO, CHECK_TODO, EDIT_TODO_TITLE } from '../actions';

function todoReducer(state = {}, action) {
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
    };
};

export default function reducer(state=[], action) {
    switch(action.type) {

        case GET_TODOS:            
            return action.data;
        
        case EDIT_TODO_TITLE:    
            return state.map(todo => todoReducer(todo, action));

        default:
            return state;
    };
};