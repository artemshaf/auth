import { DetailedHTMLProps, HTMLAttributes } from "react";

type BadgeAppearence =
  | "yellow-100"
  | "yellow-500"
  | "green-100"
  | "green-500"
  | "red-100"
  | "red-500"
  | "blue-100"
  | "blue-500"
  | "white-100"
  | "white-500"
  | "grey-100"
  | "grey-500";

export interface IBadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearence: BadgeAppearence;
}
