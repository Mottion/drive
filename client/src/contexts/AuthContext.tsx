import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { AuthContextProps } from "../@types/AuthContextProps";
import { ContextProps } from "../@types/ContextProps";
import { UserProps } from "../@types/UserProps";
import { useCookies } from "react-cookie";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    checkAuthCookies();
  }, [])

  function checkAuthCookies(){  
    setUser(cookies.user);
  }

  async function login(user: UserProps){
    setUser(user);
    setCookie("user", user, { path: "/" }); 
    return true;
  }

  return (
    <AuthContext.Provider value={{
      login,
      cookies,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};