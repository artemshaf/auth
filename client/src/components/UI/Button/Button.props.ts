import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  width?: "full" | "auto";
  appearence?: "white" | "primary";
}
