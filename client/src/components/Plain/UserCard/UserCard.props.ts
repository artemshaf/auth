import { DetailedHTMLProps, HTMLAttributes } from "react";

interface UserMetadata {
  title: string;
  count: number;
}

interface IUserCard {
  img:  string;
  name: string;
  position: string;
  metadata: UserMetadata[];
}

export interface IUserCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: IUserCard;
}
