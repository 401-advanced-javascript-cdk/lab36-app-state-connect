import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js';
import { Provider } from 'react-redux';
import createStore from './store/index.js';

const store = createStore();

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
