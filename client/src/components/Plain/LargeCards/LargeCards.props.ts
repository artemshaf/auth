import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ILargeCard } from "./LargeCard/LargeCard.props";

export interface ILargeCardsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  cards: ILargeCard[];
}
