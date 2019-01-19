import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

//Reducers
import rootReducer from './reducers/reducers';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
