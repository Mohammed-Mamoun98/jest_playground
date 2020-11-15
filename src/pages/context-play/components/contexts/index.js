import { createContext } from "react";
import { initState } from "./initialState";

export const TodoContext = createContext(initState);
console.log({ TodoContext });
