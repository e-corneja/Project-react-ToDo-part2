import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import todosData from "../data/todos.js";
import { uid } from "uid";

const Main = () => {
  const [todos, setTodos] = useState(todosData);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (!text) {
      return;
    }
    setTodos([
      {
        id: uid(),
        text: text,
        isFavorite: false,
      },
      ...todos,
    ]);
    setText("");
  };

  const handleKeyDownInput = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div>
      <AddTodo
        text={text}
        handleTextChange={handleTextChange}
        handleKeyDownInput={handleKeyDownInput}
        addTodo={addTodo}
      />
      <Todos text={text} todos={todos} />
    </div>
  );
};

export default Main;
