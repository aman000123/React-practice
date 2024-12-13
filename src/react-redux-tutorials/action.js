


export const increase = () => {
    return {
        type: 'INCREMENT'
        //not necesery type property only
        //info:'1st action'

    }
}

export const decrease = () => {

    return {
        type: 'DECREMENT'

    }
}

//now create reducer  after create Action types

//reducer == it specify how the app's state change response to actions send to store

//reducer ko   kya karna hai action btata hai


//reducer is pure function that accepts state and action as arguments and return new state of application


//reducer = (initialstate,action)==>new state

//we can create multiple reducer in our applicatiins

//each reducer represents  a specific task

//we have to register all reducer in single root reducer

//fir root reducer ko store me bhejte hain