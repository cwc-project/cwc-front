import { GET_PROJECTS, EDIT_PROJECT_TITLE, ADD_PROJECT, DELETE_PROJECT } from '../actions';

function projectReducer(state = {}, action) {
    switch (action.type) {        
      
        case EDIT_PROJECT_TITLE:   
            if(state.id !== action.data.id) {
                return state;
            }            
            return action.data;
    };
};

export default function reducer(state=[], action) {
    switch(action.type) {

        case GET_PROJECTS: 
            return action.data; 

        case EDIT_PROJECT_TITLE:    
            return state.map(todo => projectReducer(todo, action));

        case ADD_PROJECT:    
            return [...state, action.data];
        
        case DELETE_PROJECT:                  
            const index = state.findIndex(todo => todo.id === action.data.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        default:
            return state;
    };
};