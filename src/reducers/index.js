import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from 'reducers/user';
import projects from 'reducers/projects';
import todos from 'reducers/todos';
import loading from 'reducers/loading';

export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    projects,
    todos,
    loading,
  })
// const reducer = combineReducers({
//     user,
//     projects,
//     todos,
//     loading,
// });

// export default reducer;