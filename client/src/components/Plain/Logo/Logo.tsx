import cn from "classnames";
import "./Logo.scss";
import { ILogoProps } from "./Logo.props";
import Icon from "../../UI/Icon/Icon";
import { Link } from "react-router-dom";

const Logo = ({ className, ...props }: ILogoProps) => {
  return (
    <div className={cn("logo", className)}>
      <Link to={"/"}>
        <Icon icon="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
