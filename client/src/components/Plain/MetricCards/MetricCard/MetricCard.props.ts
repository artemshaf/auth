import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { CircleProgressBarStyles } from "../../СircleProgressBar/CircleProgressBar.props";

export interface IMetricCardItem {
  title: string;
  count: string;
  appearence: CircleProgressBarStyles;
  icon: JSX.Element | ReactNode;
}

export interface IMetricCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  card: IMetricCardItem;
}
