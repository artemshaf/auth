import cn from "classnames";
import { v4 } from "uuid";
import CalendarCell from "../CalendarCell/CalendarCell";
import { ICalendarRowRrops } from "./CalendarRow.props";

const CalendarRow = ({ row, className, ...props }: ICalendarRowRrops) => {
  return (
    <tr className={cn("", className)} {...props}>
      {row.map((cell) => (
        <CalendarCell key={v4()}>{cell.getDate()}</CalendarCell>
      ))}
    </tr>
  );
};

export default CalendarRow;
