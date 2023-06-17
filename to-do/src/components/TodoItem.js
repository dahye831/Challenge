import React from "react";
import { css, styled } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoProvider";

const TodoItem = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({type: 'REMOVE', id})

  return (
    <StyledWrap>
      <StyledCheck done={done} onClick={onToggle}>{done ? <MdDone/> : ''}</StyledCheck>
      <StyledText done={done}>{text}</StyledText>
      <StyledButton onClick={onRemove}><MdDelete/></StyledButton>
    </StyledWrap>
  );
};

export default TodoItem;

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin: 0;
`;

const StyledCheck = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;


const StyledText = styled.p`
  flex: 1;
  font-size: 21px;
  color: ${props => props.done ? "#ced4da" : "#495057"};
  margin: 0;
`;

const StyledButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
    opacity: 1
  }
`;