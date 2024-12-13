import React, { useEffect, useState } from 'react';

export default function ReactLifeCycle() {
    // State variable for count
    const [count, setCount] = useState(0);

    // Function to handle the increase in count
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    // useEffect to simulate componentDidMount (runs once after the component mounts)

    //component did mount step
    // useEffect(() => {
    //     console.log("Component mounted");
    // }, []);



    //component updated we want when increase then only update
    // useEffect(() => {
    //     console.log("Component updated");
    // }, [count]);


    //now we want unmounting acheive 
    //after remove component from page


    useEffect(() => {
        console.log("Component updated");

        return () => {
            console.log("compnent unmounted or remove")
        }
    }, [count]);


    return (
        <>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrease}>Increase Counter</button>
        </>
    );
}



//The reason "Component unmounted or remove" appears first in the console when the component is updated is because of how React's cleanup function in useEffect works:


// How useEffect Works with Cleanup:
// Initial Execution: When the component first mounts, useEffect runs, logging "Component updated".
// Subsequent Executions:
// Every time the count state changes, React runs the cleanup function before executing the next useEffect call.
// This means that before logging "Component updated" again, React logs the cleanup message "Component unmounted or remove", then re-runs the effect.