import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  text-align: center;
  color: #FFFFFF;
  font-weight: 500;
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
  transition: 0.2s;
  border-radius: 5px;

  &.negative{
    background-color: red;
  }
  &.positive{
    background-color: green;
  }
`;
