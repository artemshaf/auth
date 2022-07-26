import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProjectRow {
  name: string;
  status: "review" | "cancel" | "progress" | "approved";
  brand: JSX.Element;
  peoples: JSX.Element;
  type: "build" | "reconstruction" | "commercial" | "residential";
  date: string;
  id: number;
}

export interface IProjectRowProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  row: IProjectRow;
}
