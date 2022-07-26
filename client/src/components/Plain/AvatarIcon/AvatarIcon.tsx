import cn from "classnames";
import { IAvatarIconProps } from "./AvatarIcon.props";
import "./AvatarIcon.scss";

const AvatarIcon = ({
  avatar,
  alt = "",
  size = "sm",
  className,
  ...props
}: IAvatarIconProps) => {
  return (
    <img
      className={cn("avatar-icon", className, {
        "avatar-icon_sm": size === "sm",
        "avatar-icon_md": size === "md",
      })}
      src={avatar}
      alt={alt}
      {...props}
    />
  );
};

export default AvatarIcon;
