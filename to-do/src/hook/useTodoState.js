import { createContext, useContext } from "react";

const TodoStateContext = createContext();

export default useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('TodoProvider를 못찾겠습니다.')
  }
  return context
};