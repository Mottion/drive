import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(180deg, #3D1E73 0%, #3E4395 100%);
  .form {
    width: 90%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    max-width: 350px;

    h2 {
      letter-spacing: 15px;
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .forgotten{
      margin-top: 5px;
      width: 100%;
      text-align: end;
      font-weight: 500;
      color: #92B7EF;
    }
  }

`;
