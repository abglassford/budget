import {
  createStore,
  applyMiddleware,
  compose as reduxCompose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import api from './api/callApi';
import router from './navigation/router';

const compose =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;

const rootReducer = combineReducers({
  location: router.reducer,
});

const store = createStore(
  rootReducer,
  compose(
    router.enhancer,
    applyMiddleware(
      thunk.withExtraArgument(action =>
        api(action, store.dispatch, store.getState),
      ),
      router.middleware,
    ),
  ),
);
export default store;
