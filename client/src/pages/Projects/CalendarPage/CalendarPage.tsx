import cn from "classnames";
import React, { useEffect, useState } from "react";
import Calendar from "../../../components/Bussiness/Calendar/Calendar";
import { MonthNames } from "../../../components/Bussiness/Calendar/helpers";
import { Container } from "../../../components/Layout/Container/Container";
import IconInput from "../../../components/Plain/IconInput/IconInput";
import { Button, Input } from "../../../components/UI";
import Icon from "../../../components/UI/Icon/Icon";
import { useDebounce } from "../../../hooks/use-throttle-debounce";
import { ICalendarPageProps } from "./CalendarPage.props";

const CalendarPage = ({ className, ...props }: ICalendarPageProps) => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [changedYear, setChangedYear] = useState<number>(year);
  const currentMonthStr = MonthNames[month];

  const handleMonth = (month: number, value: number) => {
    if (value === -1 && month === 0) {
      setMonth(11);
      setYear(year + value);
      return;
    }
    if (value === 1 && month === 11) {
      setMonth(0);
      setYear(year + value);
      return;
    }
    setMonth(month + value);
  };

  const handleYear = useDebounce((year) => {
    setYear(year);
  }, 1000);

  return (
    <>
      <section className={cn("filter-panel", className)} {...props}>
        <Container
          className={cn("filter-panel__container", className)}
          {...props}
        >
          <div className={cn("filter-panel__actions__left")}>
            <Button className={cn("filter-panel__actions__left__filter")}>
              Filter tasks &nbsp;
              <Icon icon="filterList" />
            </Button>

            <IconInput
              placeholder="Try ‘Miami beachhouse’"
              icon="search"
              className={cn("filter-panel__actions__left__input")}
            />
          </div>
          <div className={cn("filter-panel__actions__right")}>
            <Button className={cn("filter-panel__actions__right__refresh")}>
              <Icon
                onClick={() => {
                  handleMonth(month, -1);
                }}
                icon="arrowDrop"
                className="rotate-90 hover:fill-primary-blue-500 duration-md hover:scale-[150%] hover:-translate-x-2"
              />
              <span className="mx-2">
                {currentMonthStr} {year}
              </span>
              <Icon
                onClick={() => {
                  handleMonth(month, +1);
                }}
                icon="arrowDrop"
                className="rotate-[270deg] hover:fill-primary-blue-500 duration-md hover:scale-[150%] hover:translate-x-2"
              />
            </Button>
            <div className={cn("filter-panel__actions__right__settings")}>
              <Icon icon="calendarToday" />
              &nbsp; &nbsp;Year&nbsp; &nbsp;
              <Input
                value={changedYear.toString()}
                onChange={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  setChangedYear(+e.target.value);
                  handleYear(+e.target.value);
                }}
              />
            </div>
            <Button
              className={cn("filter-panel__actions__right__customise p-2")}
            >
              <Icon icon="more" />
            </Button>
          </div>
        </Container>
      </section>
      <Calendar year={year} month={month} />
    </>
  );
};

export default CalendarPage;
