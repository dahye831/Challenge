import React from "react";
import styled from "styled-components";

const TodoTemplate = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>;
};

export default TodoTemplate;

const StyledWrap = styled.section`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 96px auto 32px;
  display: flex;
  flex-direction: column;
`;