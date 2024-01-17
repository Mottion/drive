import React, { createContext, useContext } from "react";
import { ServerContextProps } from "../@types/ServerContextProps";
import { ContextProps } from "../@types/ContextProps";
import api from "../services/axiosConfig";
import { useAuth } from "./AuthContext";
import { ProfileProps } from "../@types/ProfileProps";

const ServerContext = createContext<ServerContextProps>({} as ServerContextProps)

export const ServerProvider: React.FC<ContextProps> = ({children}) => {
  const {user} = useAuth(); 
  
  /* USERS */

  async function login(email: string, password: string){
    try{
      const request = {email, password};
      const {data} = await api.post("/auth/login", request);
      return data;
    }catch(error){
      console.log(error);
      return null
    }
  }

  async function createUser(name: string, email: string, password: string, profileId: number, imageUrl: string | null){
    try{
      const request = {name, email, password, profileId, imageUrl}
      const {data} = await api.post("/user/create-user", request, {
        headers: {
          Authorization: "Bearer " + user?.access_token
        }
      });
      return data;
    }catch(error){
      console.log(error);
      return null
    }
  }

  async function uploadImage(formData: FormData){
    try{
      const {data} = await api.post("/user/upload-image", formData, {
        headers: {
          Authorization: "Bearer " + user?.access_token
        }
      });
      return data;
    }catch(error){
      console.log(error);
      return null
    }
  }

  /* PROFILES */

  async function getProfiles(){
    try{
      const {data} = await api.get("/profile/get-all", {
        headers: {
          Authorization: "Bearer " + user?.access_token
        }
      });
      return data as ProfileProps[];
    }catch(error){
      console.log(error);
      return null
    }
  }

  return (
    <ServerContext.Provider value={{
      login,
      getProfiles,
      createUser,
      uploadImage
    }}>
      {children}
    </ServerContext.Provider >
  );
}

export function useServer(){
  const context = useContext(ServerContext);
  return context;
}