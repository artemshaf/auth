import cn from "classnames";
import { IAvatarStackProps } from "./AvatarStack.props";
import "./AvatarStack.scss";
import Avatar1 from "../../../assets/imgs/avatars/avatar1.png";
import Avatar2 from "../../../assets/imgs/avatars/avatar2.png";
import Avatar3 from "../../../assets/imgs/avatars/avatar3.png";
import Avatar4 from "../../../assets/imgs/avatars/avatar4.png";
import Avatar5 from "../../../assets/imgs/avatars/avatar5.png";
import Avatar6 from "../../../assets/imgs/avatars/avatar6.png";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { v4 } from "uuid";

const AvatarStack = ({ className, ...props }: IAvatarStackProps) => {
  const items = [
    {
      icon: Avatar1,
    },
    {
      icon: Avatar2,
    },
    {
      icon: Avatar3,
    },
    {
      icon: Avatar4,
    },
    {
      icon: Avatar5,
    },
    {
      icon: Avatar6,
    },
  ];

  if (items.length < 1) {
    return <></>;
  }

  return (
    <ul className={cn("avatar-stack__list", className)} {...props}>
      {items.map((item) => (
        <AvatarIcon
          key={v4()}
          className={cn("avatar-stack__list-item")}
          avatar={item.icon}
        />
      ))}
    </ul>
  );
};

export default AvatarStack;
