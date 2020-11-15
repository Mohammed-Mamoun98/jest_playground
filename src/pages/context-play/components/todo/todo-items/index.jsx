import { Button, Paper } from "@material-ui/core";
import React, { memo } from "react";
import { useContext } from "react";
import { TodoContext } from "../../contexts/index";
import "./index.css";
const TodoItems = memo(() => {
  const { todos, deleteTodo } = useContext(TodoContext);
  console.log("add todo render");

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="items-container">
      {todos.map(({ text }, index) => (
        <Paper
          key={index}
          style={{
            padding: "0.5rem 0.5rem",
            margin: " 0.3rem 0 ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="">{text}</div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDelete(index)}
          >
            delete
          </Button>{" "}
        </Paper>
      ))}
    </div>
  );
});

export default TodoItems;
