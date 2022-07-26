import cn from "classnames";
import { IButtonProps } from "./Button.props";
import "./Button.scss";

export const Button = ({
  appearence = "white",
  disabled = false,
  width = "auto",
  children,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn("button", className, {
        button_white: appearence === "white",
        button_primary: appearence === "primary",
        "button_w-100": width === "full",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
