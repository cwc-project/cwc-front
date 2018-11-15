import { combineReducers } from 'redux';

import projects from 'reducers/projects';
import todos from 'reducers/todos';
import loading from 'reducers/loading';

const reducer = combineReducers({
    projects,
    todos,
    loading,
});

export default reducer;