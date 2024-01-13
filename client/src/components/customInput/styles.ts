import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  
  label {
    font-size: 20px;
    font-weight: 500;
  }

  input {
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: 18px;
    color: #353434;
    font-weight: 400;
  }
`;
