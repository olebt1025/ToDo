import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import { TodoProvider } from "./komponenter/ToDoContext";
import { ThemeProvider } from "./komponenter/ThemeSwitcher";


ReactDOM.createRoot(document.getElementById("root")).render (
<ThemeProvider>
    <TodoProvider>
        <App />
    </TodoProvider>
</ThemeProvider>
)
