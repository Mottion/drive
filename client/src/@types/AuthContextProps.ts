import { UserProps } from "./UserProps";

export interface AuthContextProps{
  login: (user: UserProps) => Promise<boolean>,
  user: UserProps | null,
  cookies: {
    user?: any;
  },
}