import { DetailedHTMLProps, HTMLAttributes } from "react";

type CardMetadata = {
  icon: JSX.Element;
  text: string;
};

export interface ILargeCard {
  img: string[];
  title: string;
  description: string;
  metadata: CardMetadata[];
  id: number;
}

export interface ILargeCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: ILargeCard;
}
