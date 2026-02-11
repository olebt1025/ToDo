import {createContext, useState} from "react";

export const ThemeSwitcher = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

return(
    <ThemeSwitcher.Provider value={{theme, toggleTheme}}>
        <div className={theme}>
            {children}
        </div>
    </ThemeSwitcher.Provider>
)
}
