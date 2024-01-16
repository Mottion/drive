import { ButtonHTMLAttributes } from "react";


export interface CustomButtonProps extends ButtonHTMLAttributes<CustomButtonProps> {
  text: string,
  onclick: (args: any) => any;
}