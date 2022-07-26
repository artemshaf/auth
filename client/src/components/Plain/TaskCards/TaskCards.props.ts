import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITaskCard } from "./TaskCard/TaskCard.props";

export interface ITaskCardsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  cards: ITaskCard[];
}
