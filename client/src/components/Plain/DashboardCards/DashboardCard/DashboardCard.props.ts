import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IDashboardCardItem {
  title: string;
  count: string;
  appearence: "green" | "blue" | "red";
  icon: JSX.Element | ReactNode;
}

export interface IDashboardCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: IDashboardCardItem;
}
