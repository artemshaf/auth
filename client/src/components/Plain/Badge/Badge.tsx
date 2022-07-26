import cn from "classnames";
import { IBadgeProps } from "./Badge.props";
import "./Badge.scss";

const Badge = ({ children, className, appearence, ...props }: IBadgeProps) => {
  return (
    <span
      className={cn("badge", className, {
        "badge_yellow-100": appearence === "yellow-100",
        "badge_yellow-500": appearence === "yellow-500",
        "badge_green-100": appearence === "green-100",
        "badge_green-500": appearence === "green-500",
        "badge_red-100": appearence === "red-100",
        "badge_red-500": appearence === "red-500",
        "badge_blue-100": appearence === "blue-100",
        "badge_blue-500": appearence === "blue-500",
        "badge_white-100": appearence === "white-100",
        "badge_white-500": appearence === "white-500",
        "badge_grey-100": appearence === "grey-100",
        "badge_grey-500": appearence === "grey-500",
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
