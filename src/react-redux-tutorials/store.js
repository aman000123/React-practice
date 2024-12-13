

//redux store 

//application ko state me chang karni ho to


///application===> action ===>  reducer ===>  store===> application


//application ko subscribed karate hai redux store se


import rootReducer from "./reducer/rootReducer";

import { createStore } from "redux";
//ye functiom deprecate kar diya hai means aane wale version me remove kar diya jayega

//@reduxToolkit ne replace kar diya hai

const store = createStore(rootReducer, window._REDUX_DEVTOOLS__EXTENSION && window.__REDUX_DEVTOOLS_EXTENSIONS__());

//window._REDUX_DEVTOOLS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()---->>> isse browser me dekhte hai

//createStore sabhi reducer ko jo rootreducer me hain usko ek stor me bnd kardega 

export default store

//we have only one single store in redux application

//store state,action,reducer sari chijon ko combined karta hai

//store is a object with a few methdos
//store is not a class



//store object is accesible with help of the provider in the files of the project