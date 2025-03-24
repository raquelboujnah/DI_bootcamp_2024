import { useState } from "react";
import UseState from "./UseState";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text: string) => {
        todos.push({id: todos.length + 1, text: text})
    }

    
}