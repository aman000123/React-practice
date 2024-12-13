import { useState } from "react";

const Toggle = () => {

    const [isToggled, setIsToggled] = useState(false)

    const handleOnClick = () => {
        setIsToggled(!isToggled)
    }
    return (
        <>
            <button onClick={handleOnClick}>
                {isToggled ? 'on' : 'off'}
            </button>
        </>
    )
}

export default Toggle