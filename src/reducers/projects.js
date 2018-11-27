import { GET_PROJECTS, EDIT_PROJECT_TITLE } from '../actions';

function projectReducer(state = {}, action) {
    switch (action.type) {        
      
        case EDIT_PROJECT_TITLE:   
            if(state.id !== action.data.id) {
                return state;
            }            
            return action.data;
    };
};

export default function reducer(state={}, action) {
    switch(action.type) {

        case GET_PROJECTS: 
            return action.data; //пока работаем только с первым project в массиве     

        case EDIT_PROJECT_TITLE:    
            return projectReducer(action.data, action);

        default:
            return state;
    };
};