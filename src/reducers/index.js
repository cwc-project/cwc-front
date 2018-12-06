import { combineReducers } from 'redux';

import user from 'reducers/user';
import projects from 'reducers/projects';
import todos from 'reducers/todos';
import loading from 'reducers/loading';

const reducer = combineReducers({
  user,
  projects,
  todos,
  loading,
});

export default reducer;