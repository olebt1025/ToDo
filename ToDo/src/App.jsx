import AddTodo from "./komponenter/AddTodo";
import TodoList from "./komponenter/ToDoList";
import ThemeToggle from "./komponenter/ThemeToggleButton";


export default function App() {
  return (
    <div>
      <ThemeToggle/>
      <h1>Todo list</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}