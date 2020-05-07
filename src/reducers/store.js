import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'spec-child'
});
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;