import cn from "classnames";
import Icon from "../../UI/Icon/Icon";
import MetricCard from "./MetricCard/MetricCard";
import { IMetricCardItem } from "./MetricCard/MetricCard.props";
import { IMetricCardsProps } from "./MetricCards.props";
import "./MetricCards.scss";

const MetricCards = ({ className, ...props }: IMetricCardsProps) => {
  const items: IMetricCardItem[] = [
    {
      title: "Todays sales",
      count: "2456",
      icon: <Icon icon="trendingUp" />,
      appearence: "blue",
    },
    {
      title: "New Products",
      count: "221",
      icon: <Icon icon="trendingFlat" />,
      appearence: "green",
    },
    {
      title: "Inventory",
      count: "1425",
      icon: <Icon icon="trendingDown" />,
      appearence: "red",
    },
    {
      title: "Inventory42",
      count: "14225",
      icon: <Icon icon="trendingDown" />,
      appearence: "red",
    },
    {
      title: "Inventory2",
      count: "14255",
      icon: <Icon icon="trendingDown" />,
      appearence: "red",
    },
  ];

  if (items.length < 1) {
    return <></>;
  }
  return (
    <ul className={cn("metric__list", className)} {...props}>
      {items.map((item) => (
        <MetricCard key={item.title + item.count} card={item} />
      ))}
    </ul>
  );
};

export default MetricCards;
