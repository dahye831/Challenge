import React, { useState } from "react";
import { css, styled } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const TodoItem = ({ id, text, done }) => {

  return (
    <StyledWrap>
      <StyledCheck isDone={done}>{done && <MdDone/>}</StyledCheck>
      <StyledText isDone={done}>{text}</StyledText>
      <StyledButton><MdDelete/></StyledButton>
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
  ${({isDone}) =>
    isDone &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;


const StyledText = styled.p`
  flex: 1;
  font-size: 21px;
  color: ${({ isDone }) => (isDone ? "#ced4da" : "#495057")};
  margin: 0;
`;

const StyledButton = styled.span`
display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;

`