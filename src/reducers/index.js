import { combineReducers } from 'redux';

import user from 'reducers/user';
import project from 'reducers/projects';
import todos from 'reducers/todos';
import loading from 'reducers/loading';

const reducer = combineReducers({
    user,
    project,
    todos,
    loading,
});

export default reducer;