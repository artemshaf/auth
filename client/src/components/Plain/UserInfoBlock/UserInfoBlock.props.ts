import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IUserInfoBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string;
  roles?: string[];
}
