
import { useSelector, useDispatch } from "react-redux"

//useSelector== current state ko get karke deta hai

//useDispatch=== action ko dispatch karte hai

import { increase } from "./action"

import { decrease } from "./action"


const Redux = () => {


    const dispatch = useDispatch()

    const myState = useSelector((state) => state.increment_decremnt)
    return (
        <>
            <h1>REDUCER WITH CREATSTORE METHODS </h1>
            <h1>{myState}</h1>
            <div> <input type="text" value={myState} /></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>


                <button onClick={() => dispatch(increase())}>Increment</button>
                <button onClick={() => dispatch(decrease())}>Decrement</button></div>

        </>
    )
}


//action  == describes the types of change in the state of application
//actions are plain javasvript object

//action has a type fields   type=decrement


//reducer== how state change 


export default Redux




