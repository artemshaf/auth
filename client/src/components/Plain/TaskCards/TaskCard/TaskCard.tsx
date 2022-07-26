import cn from "classnames";
import AvatarStack from "../../AvatarStack/AvatarStack";
import Badge from "../../Badge/Badge";
import { ITaskCardProps } from "./TaskCard.props";
import "./TaskCard.scss";

const TaskCard = ({ card, className, ...props }: ITaskCardProps) => {
  const { date, img, peoples, title } = card;
  return (
    <li className={cn(className, "task-card__list-item")}>
      {img && (
        <img
          src={img}
          alt={title}
          className={cn("task-card__list-item__img")}
        />
      )}
      <h3 className={cn("task-card__list-item__title")}>{title}</h3>
      <p className={cn("task-card__list-item__date")}>{date}</p>
      <div className={cn("task-card__list-item__actions")}>
        {peoples.length > 0 && <AvatarStack />}
        <Badge appearence="red-100">Cancelled</Badge>
      </div>
    </li>
  );
};

export default TaskCard;
