import { ProfileProps } from "./ProfileProps";
import { UserProps } from "./UserProps";

export interface ServerContextProps{
  login: (email: string, password: string) => Promise<UserProps | null>;
  getProfiles: () => Promise<ProfileProps[] | null>;
  createUser: (name: string, email: string, password: string, profileId: number, imageUrl: string | null) => Promise<Boolean>;
  uploadImage: (formData: FormData) => Promise<string>
}