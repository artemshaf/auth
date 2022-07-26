import cn from "classnames";
import { Container } from "../../Layout/Container/Container";
import IconInput from "../../Plain/IconInput/IconInput";
import { Button } from "../../UI";
import Icon from "../../UI/Icon/Icon";
import { IFilterPanelProps } from "./FilterPanel.props";
import "./FilterPanel.scss";

const FilterPanel = ({ className, ...props }: IFilterPanelProps) => {
  return (
    <section className={cn("filter-panel", className)} {...props}>
      <Container
        className={cn("filter-panel__container", className)}
        {...props}
      >
        <div className={cn("filter-panel__actions__left")}>
          <Button className={cn("filter-panel__actions__left__filter")}>
            Filter projects &nbsp;
            <Icon icon="filterList" />
          </Button>
          <Button className={cn("filter-panel__actions__left__sort")}>
            Sort projects &nbsp;
            <Icon icon="sort" />
          </Button>
          <IconInput
            placeholder="Try ‘Miami beachhouse’"
            icon="search"
            className={cn("filter-panel__actions__left__input")}
          />
        </div>
        <div className={cn("filter-panel__actions__right")}>
          <Button className={cn("filter-panel__actions__right__refresh")}>
            Refresh &nbsp;
            <Icon icon="refresh" />
          </Button>
          <Button className={cn("filter-panel__actions__right__settings")}>
            Customise &nbsp;
            <Icon icon="settings" />
          </Button>
          <Button className={cn("filter-panel__actions__right__customise")}>
            Customise &nbsp;
            <Icon icon="more" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FilterPanel;
