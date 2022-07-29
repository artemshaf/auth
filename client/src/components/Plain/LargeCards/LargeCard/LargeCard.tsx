import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ITEM_ROUTE } from "../../../../utils/consts";
import { Button } from "../../../UI";
import { ILargeCardProps } from "./LargeCard.props";
import "./LargeCard.scss";
import DEFAULT_IMG from "../../../../assets/imgs/cards/img4.png";

const LargeCard = ({ card, className, ...props }: ILargeCardProps) => {
  const { img, title, description, metadata } = card;
  const navigate = useNavigate();

  return (
    <li className={cn(className, "large-card__list-item")} {...props}>
      <img
        src={
          img
            ? `https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`
            : DEFAULT_IMG
        }
        alt={title}
        className={cn("large-card__list-item__img")}
      />
      <h3 className={cn("large-card__list-item__title")}>{title}</h3>
      <p className={cn("large-card__list-item__description")}>{description}</p>
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
      <Button
        className={cn("large-card__list-item__btn mt-auto")}
        width="full"
        onClick={() => navigate(DASHBOARD_ITEM_ROUTE + card.id)}
      >
        View listing details
      </Button>
    </li>
  );
};

export default LargeCard;
