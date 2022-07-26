import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type CircleProgressBarStyles = "green" | "blue" | "red";

export interface ICircleProgressBarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLOrSVGElement>,
    HTMLOrSVGElement
  > {
  icon?: JSX.Element | ReactNode;
  progress: number;
  size?: number;
  strokeWidth?: number;
  appearence: CircleProgressBarStyles;
  circleBgStroke?: string;
  circleProgressStroke?: string;
}
