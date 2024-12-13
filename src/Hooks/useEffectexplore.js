
import { useEffect, useState } from "react"
const UseEffect = () => {

    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter1(counter1 - 1)
    }



    /*  useEffect(() => {
          console.log("using useEffects explorings ")
      }, [])//empty dependencies
  
      //kewal first time using useEffects explorings output hoga jb render hoga
  */



    useEffect(() => {
        console.log("using useEffects explorings counter")
    }, [counter])
    //jb jb counter update hoga to bhi chalega aur first time bhi render hoga




    /*
        useEffect(() => {
            console.log("using useEffects explorings counter1")
        }, [counter1])
        //jb jb counter1 update hoga to bhi chalega aur first time bhi render hoga
        */



    // useEffect(() => {
    //     console.log("using useEffects explorings when counter1 and counter2 is updating")
    // }, [counter, counter1])


    //jab jab dono me se koi bhi increment ya decrement ho tabhi chalega useEffect
    //tabhi component rerender hoga


    return (
        <>
            <h1>useEffect destructure </h1>
            <p>rendering component start on uploading web</p>
            <p>but when increment or decripent click then also rendering</p>
            <p>due to dependencies</p>
            <button onClick={increment}>Increment{counter}</button>
            <button onClick={decrement}>decrement{counter1}</button>
        </>
    )
}


export default UseEffect