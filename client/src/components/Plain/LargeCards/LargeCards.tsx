import cn from "classnames";
import { alt } from "joi";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LargeCard from "./LargeCard/LargeCard";
import { ILargeCardsProps } from "./LargeCards.props";
import "./LargeCards.scss";

const LargeCards = ({
  limit = 12,
  cards,
  className,
  ...props
}: ILargeCardsProps) => {
  const [currenctCard, setCurrenctCard] = useState(cards);

  useEffect(() => {
    const result = fetch(`https://api.artic.edu/api/v1/artworks?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        const result = res.data.reduce((acc, item) => {
          acc.push({
            img: item.image_id,
            title: item.artist_display || "DEFAULT",
            description: item.artist_display,
            metadata: [],
            id: item.api_link,
          });
          return acc;
        }, []);
        setCurrenctCard(result);
      });
  }, [cards]);

  return (
    <ul className={cn("large-card__list")} {...props}>
      {currenctCard.map((card) => (
        <LargeCard key={uuidv4()} card={card} />
      ))}
    </ul>
  );
};

export default LargeCards;
