import { useState } from "react";

function CelsiusInput() {
    const [celsius, setCelsius] = useState("");

    return (
        <div>
            <h1>without Lifting state up</h1>
            <label>Celsius: </label>
            <input
                type="number"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
            />
        </div>
    );
}

function FahrenheitInput() {
    const [fahrenheit, setFahrenheit] = useState("");

    return (
        <div>
            <label>Fahrenheit: </label>
            <input
                type="number"
                value={fahrenheit}
                onChange={(e) => setFahrenheit(e.target.value)}
            />
        </div>
    );
}

function TemperatureConverter() {
    return (
        <div>
            <CelsiusInput />
            <FahrenheitInput />
        </div>
    );
}

export default TemperatureConverter;

// Here, the CelsiusInput and FahrenheitInput components manage their own state. There’s no way for these components to communicate or synchronize values.


// In the code you provided, the Celsius and Fahrenheit values are not calculated or synchronized because the state for CelsiusInput and FahrenheitInput is managed independently within each component. As a result:

// Lack of Communication: There is no connection between the Celsius and Fahrenheit inputs, so they cannot update each other when one of them changes.

// No Shared State: Each input's state is isolated, meaning changes to one component's state are not reflected in the other.


// How to Fix This?
// To enable the calculation and synchronization of Celsius and Fahrenheit, you need to lift the state up to a common parent component (TemperatureConverter). This parent component will manage the shared state and provide functions to handle conversions and updates.