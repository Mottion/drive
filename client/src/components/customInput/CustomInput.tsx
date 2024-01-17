import React from "react";
import { Container } from "./styles";
import { InputProps } from "../../@types/InputProps";

const CustomInput: React.FC<InputProps> = ({label, type, value, placeholder}) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input 
        type={type} 
        value={value.get}
        onChange={(e) => {value.set(e.target.value)}} 
        placeholder={placeholder}
      />
    </Container>
  )
}

export default CustomInput;