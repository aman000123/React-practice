import React, { useState, useMemo } from 'react';

// In React, the useMemo hook is used to memoize the result of a computation so that it is only recalculated when one or more of its dependencies have changed. This can help improve the performance of your application by preventing unnecessary re-computations. The useMemo hook takes two arguments: a function that computes a value, and an array of dependencies. It returns the memoized value, which will only be recalculated when one of the dependencies changes.



const UseMemos = () => {
    const [count, setCount] = useState(0);


    //from this only count counting not squares

    // const squaredCount = () => {
    //     console.log('Calculating squaredCount ...');
    //     return count * count;
    // }


    //Calculate the square of the count only when count changes

    const squaredCount = useMemo(() => {
        console.log('Calculating squaredCount...');
        return count * count;
    }, [count]);


    return (
        <div>
            <h1>Usememo explore todays</h1>
            <p>Count: {count}</p>
            <p>Squared Count: {squaredCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default UseMemos;


// In this example, we have a simple React component called UseMemos with a state variable count. We want to calculate the squared value of count and display it. However, we don't want to recalculate the squared value every time the component re-renders, only when count changes.



// To achieve this, we use the useMemo hook. The function inside useMemo calculates the squared value, and it only runs when count changes because we've provided [count] as the dependency array. This means that the calculation will be memoized, and the squared value will remain the same between renders if count has not changed, improving performance.



// When you run this code and click the "Increment Count" button, you'll notice that the "Calculating squaredCount..." log message is only printed when the count changes, demonstrating the memoization behavior of useMemo.


// In summary, the useMemo hook is useful for optimizing the performance of your React components by memoizing the result of a computation based on specific dependencies. This can help reduce unnecessary calculations and improve the efficiency of your application.






export function FactorialCalculator() {
    const [number, setNumber] = useState(0);

    const factorial = useMemo(() => {
        console.log('Calculating factorial...');
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }, [number]);

    return (
        <div>
            <label>
                Enter a number:
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value, 10))} />
            </label>
            <p>Factorial of {number} is: {factorial}</p>
        </div>
    );
}


