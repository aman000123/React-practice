// What is Lifting State Up in React?
// Lifting State Up in React refers to the process of moving the state to the nearest common ancestor of the components that need to share or synchronize data. This is done to ensure a single source of truth for shared state, enabling components to work with consistent data.



// What is Lifting State Up in React?
// When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.



// When multiple components rely on the same piece of information, managing state separately in each component can lead to inconsistencies and duplication of logic. By lifting the state up, you centralize the state management in a parent component and pass the state (and any functions to modify it) down to the child components via props.


// Why Lift State Up?

// To avoid duplicating state in multiple components.
// To enable communication and synchronization between sibling components.
// To establish a single source of truth for shared data.