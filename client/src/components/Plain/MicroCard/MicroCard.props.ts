import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IMicroCard {
  img: string;
  title: string;
  date: string;
}

export interface IMicroCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: IMicroCard;
}
