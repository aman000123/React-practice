import React, { useState, useCallback } from 'react';



// The useCallback hook is used in React to memoize and optimize functions, particularly callback functions, so that they don't get recreated on every render. This can help improve the performance of your React components, especially when passing callbacks as props to child components.



// const memoizedCallback = useCallback(callbackFunction, dependencyArray);
// callbackFunction: The function you want to memoize.
// dependencyArray: An array of dependencies. The function will only be recreated if any of the dependencies change.


function UseCallbacks() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Button clicked');
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>
        </div>
    );
}

export default UseCallbacks;


// In this example, we have a UseCallbacks with a count state variable. We have a button with an onClick handler that calls handleClick. The handleClick function is memoized using useCallback. It only gets recreated if the count state changes because we've provided [count] as the dependency array.



// This means that the function referenced by handleClick remains the same between renders if count hasn't changed. Without useCallback, the function would be recreated on every render, which could lead to unnecessary re-renders in child components that use handleClick as a prop.




// By using useCallback, you ensure that the callback function doesn't change between renders unless the specified dependencies ([count] in this case) change. This can help optimize the performance of your React application by avoiding unnecessary re-renders and optimizing the reconciliation process.