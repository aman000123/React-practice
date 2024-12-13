
//now create reducer  after create Action types

//reducer == it specify how the app's state change response to actions send to store

//reducer ko   kya karna hai action btata hai


//reducer is pure function that accepts state and action as arguments and return new state of application


//reducer = (initialstate,action)==>new state

//we can create multiple reducer in our applicatiins

//each reducer represents  a specific task

//we have to register all reducer in single root reducer

//fir root reducer ko store me bhejte hain





const initialstate = 0;

//never update initial state directly

//reducer action leta  reducer store me main tain karta hai fir change

export const increment_decremnt = (state = initialstate, action) => {

    //action me hi increment decrement store hoga

    switch (action.type) {

        case "INCREMENT": {
            return state + 1
        }

        case 'DECREMENT': {
            return state - 1
        }

        default: return state;
        //initialstae 0 hai default me wahi return

    }



}