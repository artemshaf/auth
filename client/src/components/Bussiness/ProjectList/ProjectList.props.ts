import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProjectRow } from "./ProjectRow/ProjectRow.props";

export interface IProjectListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  table?: IProjectRow[];
}
