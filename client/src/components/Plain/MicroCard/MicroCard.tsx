import cn from "classnames";
import { IMicroCardProps } from "./MicroCard.props";
import "./MicroCard.scss";

const MicroCard = ({ card, className, ...props }: IMicroCardProps) => {
  const { date, img, title } = card;

  return (
    <li className={cn("micro-card", className)} {...props}>
      <img src={img} alt={title} className={"micro-card__img"} />
      <div className={"micro-card__info"}>
        <h4 className={"micro-card__info__title"}>{title}</h4>
        <p className={"micro-card__info__date"}>{date}</p>
      </div>
    </li>
  );
};

export default MicroCard;
