import { DetailedHTMLProps, HTMLAttributes } from "react";

type CardPeople = {
  icon: JSX.Element | string;
};

export interface ITaskCard {
  img?: string;
  title: string;
  date: string;
  peoples: CardPeople[];
}

export interface ITaskCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: ITaskCard;
}
