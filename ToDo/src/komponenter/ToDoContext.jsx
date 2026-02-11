import {createContext, useState} from "react";

export const ToDoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos ([...todos, {id: Date.now(), text, done: false }]);
    };

    const toggleTodo = (id) => {
        setTodos (
            todos.map(todo =>
                todo.id === id ? { ...todo, done: todo.done } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <ToDoContext.Provider value = {{ todos, addTodo, toggleTodo, deleteTodo}}>
            {children}
        </ToDoContext.Provider>
    );

}