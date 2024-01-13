import React from "react";
import { CustomButtonProps } from "../../@types/CustomButtonProps";
import { Container } from "./styles";

const CustomButton: React.FC<CustomButtonProps> = ({text}) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  )
}

export default CustomButton;