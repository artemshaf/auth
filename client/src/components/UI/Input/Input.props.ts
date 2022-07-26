import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
  type?: string;
  appearence?: string;
}
