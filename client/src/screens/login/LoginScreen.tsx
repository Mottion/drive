import React, { useState } from "react";

// components
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";

// styled-components 
import { Container } from "./styles";
import { useServer } from "../../contexts/ServerContext";
import { useAuth } from "../../contexts/AuthContext";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("admin@gmail.com.br");
  const [password, setPassword] = useState("admin123");
  const server = useServer();
  const {login} = useAuth();

  async function handleLogin(){
    const user = await server.login(email, password);
    if(user){
      await login(user);
    }
  }

  return (
    <Container>
      <div className="form">
        <h2>LOGIN</h2>
        <CustomInput type="email" label="Email" value={{get: email, set: setEmail}} placeholder="Enter with your email" />
        <CustomInput type="password" label="Password" value={{get: password, set: setPassword}} placeholder="Enter with your password" />
        <a className="forgotten" href="#">Forgot your password?</a>
        <CustomButton onclick={handleLogin} text="LOGIN" />
      </div>
    </Container>
  )
}

export default LoginScreen;