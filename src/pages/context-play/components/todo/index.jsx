import React from "react";
import { TodoContext } from "./../contexts/index";
import TodoItems from "./todo-items/index";
import { initState } from "./../contexts/initialState";
import { useState, useEffect } from "react";
import AddTodo from "./add-todo/index";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  console.log({ todos });
  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const deleteTodo = (id) => {
    const afterDelete = todos.filter((todo, index) => index !== id);
    setTodos([...afterDelete]);
  };

  return (
    <>
      <TodoContext.Provider value={{ addTodo, todos, deleteTodo }}>
        <AddTodo />
        <TodoItems />
      </TodoContext.Provider>
    </>
  );
}
