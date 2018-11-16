import { combineReducers } from 'redux';

import project from 'reducers/projects';
import todos from 'reducers/todos';
import loading from 'reducers/loading';

const reducer = combineReducers({
    project,
    todos,
    loading,
});

export default reducer;