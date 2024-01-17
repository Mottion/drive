import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  
  .accordion-body {
    padding: 0;
  }

  i {
    color: #9d9d9d;
    font-size: 22px;
    margin-right: 10px;
  }
`;

export const LinkFolder = styled(Link)`
  text-decoration: none;
`;
