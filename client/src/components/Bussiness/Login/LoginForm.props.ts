import { DetailedHTMLProps, HTMLAttributes } from "react";

export type Inputs = {
  email: string;
  password: string;
}

export interface ILoginFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
