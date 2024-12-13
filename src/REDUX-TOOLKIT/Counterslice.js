
// createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

import { createSlice } from "@reduxjs/toolkit";

//slice me sabse pahle 

//name of action 

//fir initial state

//reducer aata



//state ek object hota
const initialState = {
    count: 0
}

//now make slice
//creteslice = object accept karta ha
export const counterSlice = createSlice({

    name: "counter",//action name
    initialState,//state
    //reducer
    reducers: {

        increment: (state) => {
            state.count += 1

        },
        reset: (state, action) => {

            state.count = 0
        },
        incrementBy: (state, action) => {

            state.count = state.count + action.payload
        },
        decrement: (state) => {
            state.count -= 1

        }


    }

})


export const { increment, decrement, reset, incrementBy } = counterSlice.actions;
//increment,decrement ko as a action export kiya
export default counterSlice.reducer