import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import LargeCard from "./LargeCard/LargeCard";
import { ILargeCardsProps } from "./LargeCards.props";
import "./LargeCards.scss";

const LargeCards = ({ cards, className, ...props }: ILargeCardsProps) => {
  return (
    <ul className={cn("large-card__list")} {...props}>
      {cards.map((card) => (
        <LargeCard key={uuidv4()} card={card} />
      ))}
    </ul>
  );
};

export default LargeCards;
