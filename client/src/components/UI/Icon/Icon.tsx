import cn from "classnames";
import { icons, IIconProps } from "./Icon.props";

const Icon = ({
  appearence = "outlined",
  className,
  icon,
  ...props
}: IIconProps) => {
  const CurrentIcon = icons[icon];
  return (
    <CurrentIcon className={cn(`icon_${appearence}`, className)} {...props} />
  );
};

export default Icon;
