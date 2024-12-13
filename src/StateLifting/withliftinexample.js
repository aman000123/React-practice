import React from "react";


// 1. Toggle Between Light and Dark Modes
// Scenario:
// Two components: a button to toggle between light and dark modes, and a text component to display the current mode.



function ThemeSwitcher() {
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
            <CurrentThemeDisplay theme={theme} />
        </div>
    );
}

function ThemeToggleButton({ theme, onToggle }) {
    return (
        <>
            <h1>Hello theme switcher</h1>
            <button onClick={onToggle}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </>

    );
}

function CurrentThemeDisplay({ theme }) {
    return <p>The current theme is {theme} mode.</p>;
}

export default ThemeSwitcher;
