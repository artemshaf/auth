import cn from "classnames";
import {
  DASHBOARD_ROUTE,
  DOCUMENTATION_ROUTE,
  INOVOICES_ROUTE,
  INTEGRATIONS_ROUTE,
  PROJECTS_ROUTE,
  SOCIALS_ROUTE,
  UNITS_ROUTE,
} from "../../../utils/consts";
import { CustomLink } from "../../UI/CustomLink/CustomLink";
import Icon from "../../UI/Icon/Icon";
import { INavAsideMainProps } from "./NavAsideMain.props";
import "./NavAsideMain.scss";

const NavAsideMain = ({
  className,
  ...props
}: INavAsideMainProps): JSX.Element => {
  const items = [
    {
      icon: <Icon icon="tab" />,
      text: "Dashboard",
      to: DASHBOARD_ROUTE,
    },
    {
      icon: <Icon icon="business" />,
      text: "Available units",
      to: UNITS_ROUTE,
    },
    {
      icon: <Icon icon="verified" />,
      text: "Invoices",
      to: INOVOICES_ROUTE,
    },
    {
      icon: <Icon icon="oclock" />,
      text: "Projects",
      to: PROJECTS_ROUTE,
    },
    {
      icon: <Icon icon="share" />,
      text: "Social media",
      to: SOCIALS_ROUTE,
    },
    {
      icon: <Icon icon="dashboard" />,
      text: "Integrations",
      to: INTEGRATIONS_ROUTE,
    },
    {
      icon: <Icon icon="bookMarks" />,
      text: "Documentation",
      to: DOCUMENTATION_ROUTE,
    },
  ];

  if (!(items.length > 0)) {
    return <></>;
  }

  return (
    <ul className={cn("sidebar__main-nav-list", className)} {...props}>
      {items.map((item) => (
        <li key={item.to + item.text}>
          <CustomLink
            to={item.to}
            className={cn("sidebar__main-nav-list__item")}
          >
            <span className={cn("sidebar__main-nav-list__item__icon")}>
              {item.icon}
            </span>
            <span className={cn("sidebar__main-nav-list__item__text")}>
              {item.text}
            </span>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default NavAsideMain;
