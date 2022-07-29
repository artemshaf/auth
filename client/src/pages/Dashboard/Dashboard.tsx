import cn from "classnames";
import LargeCards from "../../components/Plain/LargeCards/LargeCards";
import MetricCards from "../../components/Plain/MetricCards/MetricCards";
import { Button } from "../../components/UI";
import Icon from "../../components/UI/Icon/Icon";
import { IDashboardPageProps } from "./Dashboard.props";
import { Container } from "../../components/Layout/Container/Container";
import "./Dashboard.scss";
import { dashboardCards } from "../../mock";

const Dashboard = ({ className, ...props }: IDashboardPageProps) => {
  const items = [
    {
      element: (
        <Button className="p-3">
          <Icon icon="notifications" />
        </Button>
      ),
    },
    {
      element: (
        <Button className="p-3">
          <Icon icon="search" />
        </Button>
      ),
    },
  ];

  return (
    <Container>
      <section className={cn("dashboard__container", className)} {...props}>
        <div className={"dashboard__top-actions"}>
          <h1 className={"dashboard__top-actions__title"}>Your dashboard</h1>
          <ul className={"dashboard__top-actions__list"}>
            {items.map((item) => (
              <li>{item.element}</li>
            ))}
          </ul>
        </div>
        <MetricCards className={"dashboard__metrics"} />
        <h2 className={"dashboard__favorits-title"}>Your favorites</h2>
        <LargeCards className={"dashboard__favorits"} cards={dashboardCards} />
      </section>
    </Container>
  );
};

export default Dashboard;
