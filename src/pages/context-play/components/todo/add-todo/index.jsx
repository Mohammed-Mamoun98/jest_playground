import React, { memo } from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { TodoContext } from "./../../contexts/index";
import { useContext } from "react";

const AddTodo = memo(() => {
  const { addTodo } = useContext(TodoContext);
  const [value, setValue] = useState("");

  const clearInput = () => {
    setValue("");
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    clearInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        placeholder="Add Todo"
        value={value}
        fullWidth
      />
    </form>
  );
});

export default AddTodo;
