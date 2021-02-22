import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from "redux"
import reducer from './components/reducer'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watcher } from './components/saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcher)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root'));

