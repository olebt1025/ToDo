import {useContext} from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeSwitcher);

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
    )
}