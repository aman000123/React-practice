// Understanding React.memo() in Depth
// React.memo() is a higher-order component (HOC) that optimizes functional components by preventing unnecessary re-renders when their props remain unchanged.


// ================================Why Use React.memo()?
// By default, in React:

// When a parent component re-renders, all its child components also re-render, even if their props remain unchanged.
// This can lead to performance issues, especially in complex applications with many nested components.

// React.memo() helps optimize functional components by memoizing them, meaning they only re-render when their props change.

// React.memo() memoizes the component, meaning it stores the result of the last render and only updates when props change.

import { useState } from "react";

const ChildComponent = ({ name }) => {
    console.log("ChildComponent rendered without memeo!");
    return <p>Name: {name}</p>;
};

const ParentComponentWithOutMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <hr />
            <h1>memo without component</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Counting without use memo: {count}</p>
            <ChildComponent name="John" />
            <hr />
        </>
    );
};

export default ParentComponentWithOutMemo;


// Issue:
// Every time we click Increment Count, ParentComponent re-renders.
// Even though name is always "John", ChildComponent still re-renders unnecessarily.