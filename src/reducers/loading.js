import { GET_TODOS, }  from '../actions';
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

        default:
            return state;
    };
};

export default reducer;