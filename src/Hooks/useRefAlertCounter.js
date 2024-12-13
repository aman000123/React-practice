
import { useRef, useState } from "react";

const RefExplore = () => {

    const [count, setCount] = useState(0);
    let ref = useRef(0)

    const handleClick = () => {
        ref.current = ref.current + 1
        console.log('trigered rerenderd btn alert using useRef====>>>' + ref.current + "times")
        alert(`you clicked ${ref.current} times`)
        // localStorage.setItem('amana', ref.current)
    }

    return (
        <>

            <h2>Alert count when button is clicked  {ref.current}time</h2>
            <button onClick={handleClick}>Click me!</button>

        </>
    )
}
export default RefExplore


//  but useRef does not trigger re-renders when its .current property changes. If you want to update the UI while using useRef, you need a way to force a re-render.