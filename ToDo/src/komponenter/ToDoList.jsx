import {useContext} from "react";
import { ToDoContext } from "./ToDoContext";

export default function TodoList() {
    const { todos, toggleTodo, deleteTodo } = useContext(ToDoContext);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span style={{ textDecoration: todo.done ? "line-through" : "none"}} onClick={() => toggleTodo(todo.id)}>
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}> ❌</button>
                </li>
            ))}
        </ul>
    );
}