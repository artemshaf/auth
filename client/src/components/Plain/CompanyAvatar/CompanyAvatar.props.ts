import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICompanyAvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  avatar?: string;
  name: string;
}
