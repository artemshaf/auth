import cn from "classnames";
import { Button } from "../../UI";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { IUserCardProps } from "./UserCard.props";
import "./UserCard.scss";

const UserCard = ({ card, className, ...props }: IUserCardProps) => {
  const { img, metadata, name, position } = card;

  return (
    <div className={cn("user-card", className)} {...props}>
      <AvatarIcon avatar={img} alt={name} className={cn("user-card__img")} />
      <h2 className={cn("user-card__name")}>{name}</h2>
      <h3 className={cn("user-card__position")}>{position}</h3>
      {metadata.length > 0 && (
        <ul className={cn("user-card__meta-list")}>
          {metadata.map((item) => (
            <li
              key={item.title + item.count}
              className={cn("user-card__meta-list-item")}
            >
              <h4 className={cn("user-card__meta-list-item__title")}>
                {item.title}
              </h4>
              <span className={cn("user-card__meta-list-item__count")}>
                {item.count}
              </span>
            </li>
          ))}
        </ul>
      )}
      <Button appearence="white">View profile</Button>
    </div>
  );
};

export default UserCard;
