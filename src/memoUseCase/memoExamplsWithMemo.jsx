import { useState, memo } from "react";

const ChildComponent = memo(({ name }) => {
    console.log("ChildComponent rendered with memo!");
    return <p>Name: {name}</p>;
});

const ParentComponentWithMemo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <hr />
            <h1>memo with component</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Counting with use memo: {count}</p>
            <ChildComponent name="John" />
            {/* <ChildComponent name={count % 2 === 0 ? "John" : "Doe"} /> */}
            {/* Since name changes every time count becomes odd/even, ChildComponent will re-render. */}
            <button onClick={() => setCount(0)}>Reset count</button>
            <hr />
        </>
    );
};

export default ParentComponentWithMemo;


// Result:
// ChildComponent only renders once initially.
// When the button is clicked, only ParentComponent re-renders, but ChildComponent does not.
// This is because name="John" never changes, so React.memo() prevents unnecessary renders.


// When Does React.memo() Re-render the Component?
// React.memo() will re-render the component only if props change.



// When Should You Use React.memo()?


// ✅ Use React.memo() if:

// A component receives the same props frequently and its re-render is unnecessary.
// The component is expensive to render (complex calculations, large lists, etc.).
// The parent component re-renders frequently but the child component doesn't need to.


// ❌ Avoid React.memo() if:

// The component always gets new props (e.g., changing object/array references).
// The component is small and inexpensive to render (React's default rendering is already optimized).
// You are over-optimizing without measuring performance.


// Conclusion
// React.memo() is great for optimizing functional components by preventing unnecessary re-renders.
// It performs a shallow comparison of props by default.
// Use custom comparison functions for deep prop comparisons.
// Combine with useMemo() or useCallback() to prevent issues with object/array references.
