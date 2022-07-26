import cn from "classnames";
import { Link } from "react-router-dom";
import { Button } from "../../../UI";
import { ILargeCardProps } from "./LargeCard.props";
import "./LargeCard.scss";
const LargeCard = ({ card, className, ...props }: ILargeCardProps) => {
  const { img, title, description, metadata } = card;

  return (
    <li className={cn(className, "large-card__list-item")} {...props}>
      <Link to={"/"}>
        <img
          src={img}
          alt={title}
          className={cn("large-card__list-item__img")}
        />
        <h3 className={cn("large-card__list-item__title")}>{title}</h3>
        <p className={cn("large-card__list-item__description")}>
          {description}
        </p>
        {metadata.length > 0 && (
          <ul className={cn("large-card__list-item__meta-list")}>
            {metadata.map((item) => (
              <li className={cn("large-card__list-item__meta-list-item")}>
                {item.icon}
                <span
                  className={cn("large-card__list-item__meta-list-item__text")}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        )}
        <Button className={cn("large-card__list-item__btn")} width="full">
          View listing details
        </Button>
      </Link>
    </li>
  );
};

export default LargeCard;
