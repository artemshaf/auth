import cn from "classnames";
import { useEffect, useLayoutEffect, useState } from "react";
import { v4 } from "uuid";
import { weekDayNames } from "../../../mock";
import { ICalendarProps } from "./Calendar.props";
import CalendarRow from "./CalendarRow/CalendarRow";
import { getMonthData } from "./helpers";
import "./Calendar.scss";
import { Button } from "../../UI";
import { Container } from "../../Layout/Container/Container";
import Icon from "../../UI/Icon/Icon";
import IconInput from "../../Plain/IconInput/IconInput";

const Calendar = ({ year, month, className, ...props }: ICalendarProps) => {
  const [monthData, setMonthData] = useState(getMonthData(year, month));

  useEffect(() => {
    setMonthData(getMonthData(year, month));
  }, [year, month]);

  return (
    <table className={cn("project-calendar", className)} {...props}>
      <thead>
        <tr>
          {weekDayNames.map((name) => (
            <th key={name} className="">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {monthData.map((row) => (
          <CalendarRow key={v4()} row={row} className="" />
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
