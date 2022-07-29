import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IQuestionCard } from "../../../mock";

export interface IQuestionCardsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  questCards?: IQuestionCard[];
  quickCards?: IQuestionCard[];
}
