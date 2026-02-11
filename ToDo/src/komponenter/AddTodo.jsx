import { useContext, useState } from "react";
import {ToDoContext} from "./ToDoContext";

export default function AddTodo() {
    const {addTodo} = useContext(ToDoContext);
    const [text, setText] = useState("");

    return (
        <div>
            <input value={ text } onChange={e => setText(e.target.value)} />
            <button onClick={() => {addTodo(text); setText(""); }}>
                Add
            </button>
        </div>
    );
}