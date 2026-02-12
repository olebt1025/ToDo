import {useContext} from "react";
import { ToDoContext } from "./ToDoContext";

export default function TodoList() {
    const { todos, toggleTodo, deleteTodo } = useContext(ToDoContext);

    return (
        <ul style = {{listStyle:"none"}}>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span onClick={() => toggleTodo(todo.id)}>
                        {todo.text}
                    </span>
                    <button id="deleteBtn" onClick={() => deleteTodo(todo.id)}> ❌ </button>
                </li>
            ))}
        </ul>
    );
}