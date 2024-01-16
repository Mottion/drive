import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > header {
    width: 100%;
    padding: 10px 30px;
    background-color: #31156D;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 600;
    }

    .imageWrapper {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  .workspace{
    display: flex;
    flex-direction: row;
    flex: 1;

    nav {
      flex: 2;
      border-right-width: 2px;
      border-right-color: #00000030;
      border-right-style: solid;
      color: #000;
    }

    .screen {
      flex: 6;
      background-color: #e1e1e1;
      box-shadow: inset 0px 0px 10px #00000047;
    }
    .usersList {
      flex: 2
    }
  }
`;