import React from "react";
import { InputProps } from "../../@types/InputProps";
import { Container } from "./styles";

const FloatingLabels: React.FC<InputProps>  = ({value, type, placeholder, label}) => {
 
  return (
    <Container className="form-floating mb-3">
      <input value={value.get} onChange={(e) => {value.set(e.target.value)}} type={type} className="form-control" placeholder={placeholder} />
      <label>{label}</label>
    </Container>
  );
}

export default FloatingLabels;