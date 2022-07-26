import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IconNames } from "../../UI/Icon/Icon.props";

export interface IIconInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: string;
  icon: IconNames;
  placeholder?: string;
}
