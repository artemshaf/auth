import cn from "classnames";
import { Link, useMatch } from "react-router-dom";
import { CustomLinkProps } from "./CustomLink.props";
import "./CustomLink.scss";

export const CustomLink = ({
  children,
  to,
  className,
  ...props
}: CustomLinkProps): JSX.Element => {
  const match = useMatch(to as string);

  return (
    <Link
      to={to}
      className={cn("custom-link", className, {
        "custom-link_active": match,
      })}
      {...props}
    >
      {children}
    </Link>
  );
};
