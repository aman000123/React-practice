
import { increment_decremnt } from "./incr-reducer";

import { combineReducers } from "redux";

//combineReducer==>  multi reducer ko single root reducer me combine


const rootReducer = combineReducers({

    increment_decremnt
    //reducer2,
    //reducer3
    //aise multi reducer pass karte 
})


export default rootReducer