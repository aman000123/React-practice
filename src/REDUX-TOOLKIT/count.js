
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy, reset } from "./Counterslice";

const CountReduxToolkit = () => {

    const mystate = useSelector((state) => state.counter.count)
    console.log("my--------------", mystate)
    //counter == name hai countrslice ke andar
    //count initial state hai
    const dispatch = useDispatch()

    //useSelector== current state ko get karke deta hai

    //useDispatch=== action ko dispatch karte hai

    return (
        <>

            <h1>REDUX TOOLKIT EXAMPLE</h1>
            <h3>{mystate}</h3>
            <input type="text" value={mystate} />
            <div style={{ display: "flex", width: "50%", margin: "auto", justifyContent: "space-between" }}> <button onClick={() => dispatch(increment())}>INCREMENT</button>
                <button onClick={() => dispatch(decrement())}>DECREMENT</button>
                <button onClick={() => dispatch(incrementBy(20))}>IECREMENT BY 20</button>
                <button onClick={() => dispatch(reset())}>RESET</button></div>
            <h1>REDUX TOOLKIT COMPLETES</h1>

        </>
    )
}
export default CountReduxToolkit