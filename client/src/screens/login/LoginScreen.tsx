import React, { useState } from "react";

// components
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";

// styled-components 
import { Container } from "./styles";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <div className="form">
        <h2>LOGIN</h2>
        <CustomInput label="Email" value={{get: email, set: setEmail}} placeholder="Enter with your email" />
        <CustomInput label="Password" value={{get: password, set: setPassword}} placeholder="Enter with your password" />
        <a className="forgotten" href="#">Forgot your password?</a>
        <CustomButton text="LOGIN" />
      </div>
    </Container>
  )
}

export default LoginScreen;