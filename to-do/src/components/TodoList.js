import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoProvider";


const TodoList = () => {
  const todos = useTodoState();

  return (
    <StyledList>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
    ))}    

    </StyledList>
  );
}

export default TodoList;

const StyledList = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;