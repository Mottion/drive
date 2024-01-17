import React from "react";
import { useNotify } from "../../contexts/NotifyContext";
import { Container } from "./styles";

const Notify: React.FC = () => {
  const {message, type, visible} = useNotify();
  
  return (
    <Container className={type} style={{opacity: visible ? 1 : 0}}>
      {message}
    </Container>
  );
}

export default Notify;