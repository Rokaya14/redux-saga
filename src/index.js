import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from "redux"
import reducer from './components/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(reducer,)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root'));

