import React from 'react';
import { Provider } from 'react-redux';

import Home from './Home';
import store from './reducers/store';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


export default App;
