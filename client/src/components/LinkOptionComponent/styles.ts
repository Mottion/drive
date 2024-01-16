import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
  cursor: pointer;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  display: flex;
  text-decoration: none;

  i {
    color: #9d9d9d;
    font-size: 22px;
    margin-right: 10px;
  }

  &:hover {
    color: #0c63e4;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
    background-color: #e7f1ff;
  }
`;
