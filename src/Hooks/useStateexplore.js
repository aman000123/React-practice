
import { useState } from "react"
const UseState = () => {
    const [name, setName] = useState("Aman mishra")
    const [count, setCount] = useState(0)

    const handleOnClick = () => {
        setName("Dev Aman mishra")
        setCount(count + 1)
        console.log("components trigerred rerendering using useState")
    }

    const [toggle, setToggle] = useState(true)

    const handleOnToggle = () => {
        setToggle((prevToggle) => !prevToggle)
    }
    return (
        <>
            <h3>UseState explore with change name</h3>
            <h3>{name}</h3>
            <h3>{count} times</h3>
            <button onClick={handleOnClick}>Change name</button>
            <button onClick={handleOnToggle} style={{ backgroundColor: toggle ? "red" : "green", border: "none", cursor: "pointer", color: "white", padding: "10px 50px", borderRadius: "10px", marginTop: "10px" }}>

                {toggle ? "ON" : "OF"}</button >

        </>
    )
}

export default UseState