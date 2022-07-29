import cn from "classnames";
import Badge from "../Badge/Badge";
import { ICalendarRecordProps } from "./CalendarRecord.props";
import "./CalendarRecord.scss";
const CalendarRecord = ({ className, ...props }: ICalendarRecordProps) => {
  return (
    <li className={cn("calendar-record", className)} {...props}>
      <Badge appearence="blue-500" className="calendar-record__badge" />
      <span className="calendar-record__time">123</span>
      <span className="calendar-record__text">21</span>
    </li>
  );
};

export default CalendarRecord;
