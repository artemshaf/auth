import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IAvatarIconProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  alt?: string;
  size?: "md" | "sm";
  avatar: string;
}
