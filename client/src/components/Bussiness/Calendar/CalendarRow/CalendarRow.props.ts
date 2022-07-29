import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ICalendarRowRrops
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  row: Date[];
}
