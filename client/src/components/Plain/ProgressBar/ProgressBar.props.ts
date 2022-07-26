import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProgressBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  done?: number;
  appearence?: "blue" | "green" | "red";
}
