import cn from "classnames";
import React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { ICompanyAvatarProps } from "./CompanyAvatar.props";
import Avatar1 from "../../../assets/imgs/avatars/avatar1.png";
import "./CompanyAvatar.scss";

const CompanyAvatar = ({
  avatar = Avatar1,
  name,
  className,
  ...props
}: ICompanyAvatarProps) => {
  return (
    <div className={cn("company-avatar__block")} {...props}>
      <AvatarIcon avatar={avatar} className={cn("company-avatar__icon")} />
      <p className={cn("company-avatar__text")}>{name}</p>
    </div>
  );
};

export default CompanyAvatar;
