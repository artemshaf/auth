import classNames from "classnames";
import { ITaskCardsProps } from "./TaskCards.props";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "./TaskCard/TaskCard";
import "./TaskCards.scss";

const TaskCards = ({ cards, className, ...props }: ITaskCardsProps) => {
  return (
    <ul className={classNames("task-card__list")} {...props}>
      {cards.map((card) => (
        <TaskCard key={uuidv4()} card={card} />
      ))}
    </ul>
  );
};

export default TaskCards;
