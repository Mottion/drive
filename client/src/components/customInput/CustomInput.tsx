import React from "react";
import { Container } from "./styles";
import { CustomInputProps } from "../../@types/CustomInputProps";

const CustomInput: React.FC<CustomInputProps> = ({label, value, placeholder}) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input 
        type="text" 
        value={value.get}
        onChange={(e) => {value.set(e.target.value)}} 
        placeholder={placeholder}
      />
    </Container>
  )
}

export default CustomInput;