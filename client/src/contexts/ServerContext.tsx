import React, { createContext, useContext } from "react";
import { ServerContextProps } from "../@types/ServerContextProps";
import { ContextProps } from "../@types/ContextProps";
import api from "../services/axiosConfig";
// import { useAuth } from "./AuthContext";

const ServerContext = createContext<ServerContextProps>({} as ServerContextProps)

export const ServerProvider: React.FC<ContextProps> = ({children}) => {
  // const {user} = useAuth(); 

  async function login(email: string, password: string){
    try{
      const request = {email, password};
      const {data} = await api.post("/auth/login", request);
      console.log("🚀 ~ login ~ data:", data)
      return data;
    }catch(error){
      console.log(error);
    }
  }

  return (
    <ServerContext.Provider value={{
      login
    }}>
      {children}
    </ServerContext.Provider >
  );
}

export function useServer(){
  const context = useContext(ServerContext);
  return context;
}