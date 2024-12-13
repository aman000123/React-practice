


import { useState } from "react";
import Prop2 from "./Propps2";

const Prop = () => {
    let name = "Aman"
    const [names, setName] = useState("Hello pransh")
    console.log("prop1 component rerendering")

    const handleChange = () => {
        setName("Jai siya ram")
    }
    return (

        <>
            <Prop2 name={name} handleChange={handleChange} names={names}></Prop2>


        </>
    )
}

export default Prop