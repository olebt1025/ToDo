import {createContext, useState, useEffect} from "react";

export const ThemeSwitcher = createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState (() => {
        return localStorage.getItem("theme") || "light";
    });

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect (() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

return(
    <ThemeSwitcher.Provider value={{theme, toggleTheme}}>
        <div className={theme}>
            {children}
        </div>
    </ThemeSwitcher.Provider>
)
}
