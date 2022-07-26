import cn from "classnames";
import { CustomLink } from "../../UI/CustomLink/CustomLink";
import Icon from "../../UI/Icon/Icon";
import { INavAsideFooterProps } from "./NavAsideFooter.props";
import "./NavAsideFooter.scss";

const NavAsideFooter = ({
  className,
  ...props
}: INavAsideFooterProps): JSX.Element => {
  const items = [
    {
      icon: <Icon icon="settings" />,
      text: "Settings",
      to: "/settings",
    },
    {
      icon: <Icon icon="helpCircle" />,
      text: "Help center",
      to: "/help",
    },
  ];

  if (!(items.length > 0)) {
    return <></>;
  }

  return (
    <ul className={cn("sidebar__footer-nav-list", className)} {...props}>
      {items.map((item) => (
        <li key={item.to + item.text}>
          <CustomLink
            to={item.to}
            className={cn("sidebar__footer-nav-list__item")}
          >
            <span className={cn("sidebar__footer-nav-list__item__icon")}>
              {item.icon}
            </span>
            <span className={cn("sidebar__footer-nav-list__item__text")}>
              {item.text}
            </span>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavAsideFooter;
