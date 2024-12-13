

// Higher-Order Component

// We create an HOC called withGreeting, which takes the WrappedComponent (in this case, GreetingComponent) as an argument and returns a new functional component.

const WithGreeting = (WrappedComponent) => {
    return (props) => {
        const { name } = props;
        const greeting = `Hello, ${name}!`;

        return <WrappedComponent greeting={greeting} {...props} />;
    };
};

export default WithGreeting