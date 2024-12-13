
import ChildRef from "./ForwordChildref";
import { useRef } from "react";

const ParentForwordRef = () => {

    const inputRef = useRef(null)

    const handleOnClick = () => {
        inputRef.current.focus()
    }


    //we can also use time intervals in these ref
    //5 sec bad focus
    {/*
    const handleOnClick = () => {
        setTimeout(() => {
            inputRef.current.focus()
            console.log("trigger after 5 seconds")
        }, 5000)

    }*/}
    return (
        <>
            <h3>Using forword ref wth parent and child component examples</h3>

            <ChildRef ref={inputRef} />
            <button onClick={handleOnClick}>Click button for input fields focus</button>

        </>
    )
}

export default ParentForwordRef