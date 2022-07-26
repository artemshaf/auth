import cn from "classnames";
import CircleProgressBar from "../../СircleProgressBar/CircleProgressBar";
import { IMetricCardProps } from "./MetricCard.props";
import "./MetricCard.scss";

const MetricCard = ({ card, className, ...props }: IMetricCardProps) => {
  const { title, count, appearence, icon } = card;

  return (
    <li className={cn("metric__list-item", className)} {...props}>
      <div className={cn("metric__list-item__info")}>
        <h2 className={cn("metric__list-item__info__text")}>{title}</h2>
        <h3 className={cn("metric__list-item__info__count")}>{count}</h3>
      </div>
      <CircleProgressBar
        progress={+count}
        appearence={appearence}
        icon={icon}
      />
    </li>
  );
};

export default MetricCard;
