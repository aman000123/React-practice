import { useState } from "react";

function TemperatureConverterLifting() {

    const [temperature, setTemperature] = useState({ celsius: "", fahrenheit: "" });

    const handleCelsiusChange = (celsius) => {
        const fahrenheit = celsius ? (celsius * 9) / 5 + 32 : "";
        setTemperature({ celsius, fahrenheit });
    };

    const handleFahrenheitChange = (fahrenheit) => {
        const celsius = fahrenheit ? ((fahrenheit - 32) * 5) / 9 : "";
        setTemperature({ celsius, fahrenheit });
    };

    return (
        <div>
            <CelsiusInput value={temperature.celsius} onChange={handleCelsiusChange} />
            <FahrenheitInput value={temperature.fahrenheit} onChange={handleFahrenheitChange} />
        </div>
    );
}

function CelsiusInput({ value, onChange }) {
    return (
        <div>
            <h1>with Lifting state up</h1>
            <label>Celsius: </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

function FahrenheitInput({ value, onChange }) {
    return (
        <div>
            <label>Fahrenheit: </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default TemperatureConverterLifting;



// How Lifting State Up Works Here

// The state (temperature) is lifted to the TemperatureConverter component.
// The CelsiusInput and FahrenheitInput components become controlled components:
// They receive value (state) as a prop.
// They receive onChange (function to update state) as a prop.
// When the user updates one input, the state in TemperatureConverter is updated, and the changes propagate to both inputs.



// Benefits of Lifting State Up

// Single Source of Truth: The temperature state is managed in one place, ensuring consistency.
// Synchronization: Changes in one input are immediately reflected in the other.
// Reusability: CelsiusInput and FahrenheitInput are simple, stateless, and reusable components.
// This pattern is foundational in React and enables better management of shared state in applications.