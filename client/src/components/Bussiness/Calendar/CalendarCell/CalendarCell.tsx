import cn from "classnames";
import { ICalendarCellProps } from "./CalendarCell.props";
import "./CalendarCell.scss";

const CalendarCell = ({
  children,
  className,
  ...props
}: ICalendarCellProps) => {
  return (
    <td className={cn("calendar-cell", className)} {...props}>
      {children}
    </td>
  );
};

export default CalendarCell;
