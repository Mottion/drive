import { UserProps } from "./UserProps";

export interface ServerContextProps{
  login: (email: string, password: string) => Promise<UserProps>;
}