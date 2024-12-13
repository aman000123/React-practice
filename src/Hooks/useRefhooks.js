


/*
When do you need to use refs?

There are few use cases to go for refs,

Managing focus, text selection, or media playback.

Triggering imperative animations.

Integrating with third-party DOM libraries.*/


import { useRef, useEffect } from "react";


const Ref = () => {

    const myRef = useRef(null);
    useEffect(() => {
        myRef.current.focus()
        console.log('trigered rerenderd using useref')
    }, [])


    return (
        //input fucus 
        <>
            <h2>Focus input field when page is loaded using useRef hooks</h2>
            <input ref={myRef} />

        </>
    )
}

export default Ref


{/*
//click button then focus


const Ref = () => {

    const myRef = useRef();



    const handleOnClick = () => {
        myRef.current.focus();
    }

    return (
        <>
            <input ref={myRef} />
            <button onClick={handleOnClick}>Focus input after click</button>


        </>
    )
}

export default Ref
*/}
