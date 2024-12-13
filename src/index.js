import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


//this store for redux creSateSlice OLD methods
//import store from './react-redux-tutorials/store';


//this store is for redux toolkit
import { store } from './REDUX-TOOLKIT/store';

import { Provider } from 'react-redux';

//app ki sari state store me hai 
//state ko sare components use karte hai

//provider == se sare store ki state ko sabhi components access


store.subscribe(() => console.log(store.getState()))
//subscribe  = changelistener
//console me result state update ko dikhayega

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>


      {/* we can't create more than one store in on react applicatiins */}
      {/* //for redux toolkit */}
      <Provider store={store} >
        <App />
      </Provider>

      {/* //for redux createSlise 
      <Provider store={store} >
        <App />
      </Provider>

      */}
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
