import cn from "classnames";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { IUserInfoBlockProps } from "./UserInfoBlock.props";
import Avatar1 from "../../../assets/imgs/avatars/avatar1.png";
import "./UserInfoBlock.scss";

const UserInfoBlock = ({
  name = "Louise Thompson",
  roles = "Enterprise plan",
  className,
  ...props
}: IUserInfoBlockProps) => {
  return (
    <div className={cn("user-info-block", className)} {...props}>
      <AvatarIcon avatar={Avatar1} className={cn("user-info-block__icon")} />
      <div className={cn("user-info-block__info")}>
        <p className={cn("user-info-block__info__name")}>{name}</p>
        <p className={cn("user-info-block__info__roles")}>{roles}</p>
      </div>
    </div>
  );
};

export default UserInfoBlock;
