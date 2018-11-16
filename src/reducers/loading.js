import { GET_TODOS, GET_PROJECTS }  from '../actions';
function reducer( state = 
    { 
        projects: false, 
        todos: false,
    }, action) {
    switch (action.type) {
        case `${GET_TODOS}_REQUEST`:
            return {...state, todos: true, };

        case GET_TODOS: 
            return {...state, todos: false, };

        case `${GET_PROJECTS}_REQUEST`:
            return {...state, projects: true, };

        case GET_PROJECTS: 
            return {...state, projects: false, };

        default:
            return state;
    };
};

export default reducer;