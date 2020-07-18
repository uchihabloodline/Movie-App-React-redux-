import React from 'react';
import ReactDOM from 'react-dom';
//imported redux store
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers.js';

//added redux store object below
const store = createStore(movies);
console.log('store ',store);
console.log('STATE ',store.getState());   //to fetch and check the current state of imported reducer.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
