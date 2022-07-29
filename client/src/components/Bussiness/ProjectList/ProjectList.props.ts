import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProjectRow } from "./ProjectRow/ProjectRow.props";

export interface IProjectListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  table?: IProjectRow[];
}
