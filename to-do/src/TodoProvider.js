import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default: 
      throw new Error(`Unhandled action type ${action.type}`)
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext()

const TodoProvider = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const createID = Date.now();
  const nextId = useRef(createID);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider

//custom hook
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('TodoPRovider 를 못찾겠다')
  }
  return context//context 객체를 받아 그 context의 현재 값 반환
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error("TodoPRovider 를 못찾겠다");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if (!context) {
    throw new Error("TodoPRovider 를 못찾겠다");
  }
  return context;
}