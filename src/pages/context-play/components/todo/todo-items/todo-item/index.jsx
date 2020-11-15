import React from "react";

export default function TodoItem({ text = "", id = 0 }) {
  return <div>{text}</div>;
}
