import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import routes from './routes';

const history = createHistory();
const { reducer, middleware, enhancer } = connectRoutes(history, routes);

export default {
  reducer,
  middleware,
  enhancer,
};
