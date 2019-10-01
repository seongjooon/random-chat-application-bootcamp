import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from '../src/component/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootEL = document.getElementById('root');

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootEL
);

serviceWorker.unregister();
