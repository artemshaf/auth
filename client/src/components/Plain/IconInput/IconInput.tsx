import cn from "classnames";
import Icon from "../../UI/Icon/Icon";
import { Input } from "../../UI/Input/Input";
import { IIconInputProps } from "./IconInput.props";
import "./IconInput.scss";

const IconInput = ({
  placeholder = "",
  icon,
  type = "text",
  className,
  children,
  ...props
}: IIconInputProps) => {
  return (
    <div className={cn("search-input", className)} {...props}>
      <Input
        type={type}
        className="search-input__input"
        placeholder={placeholder}
      >
        {children}
      </Input>
      <Icon className="search-input__icon" icon={icon} />
    </div>
  );
};

export default IconInput;
