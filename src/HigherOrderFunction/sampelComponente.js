
import WithGreeting from "./HigherOrdercompo";

// Sample component

//We define a functional component GreetingComponent, which displays the greeting received as a prop.

const GreetingComponent = (props) => {
    return (
        <div>

            <h1>Higher-Order Component Example with Functional Component</h1>
            <h2>Greeting:{props.greeting}</h2>

        </div>
    );
};


// Wrap the component with the HOC
export const EnhancedGreetingComponent = WithGreeting(GreetingComponent);