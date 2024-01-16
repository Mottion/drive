import styled from "styled-components";

export const Container = styled.button`
  margin-top: 30px;
  padding: 10px;
  width: 90%;
  border: 0;
  border-radius: 5px;
  background-color: #31156D;
  cursor: pointer;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  
  p {
    font-weight: 600;
    letter-spacing: 5px;
    font-size: 22px;
    margin: 0;
  }
  
  &:hover{
    opacity: 0.85;
  } 
`;