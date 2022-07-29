import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICalendarProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  year: number;
  month: number;
}
