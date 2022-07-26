import cn from "classnames";
import NavAsideFooter from "../../Plain/NavAsideFooter/NavAsideFooter";
import NavAsideMain from "../../Plain/NavAsideMain/NavAsideMain";
import Logo from "../../Plain/Logo/Logo";
import UserInfoBlock from "../../Plain/UserInfoBlock/UserInfoBlock";
import { ISideBarProps } from "./Sidebar.props";
import "./Sidebar.scss";
import Icon from "../../UI/Icon/Icon";
import { useEffect, useState } from "react";
import { useMatchMedia } from "../../../hooks/use-match-media";

const Sidebar = ({ className, ...props }: ISideBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { md } = useMatchMedia();

  const handleOpen = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (md) {
      console.log("md");
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, md]);

  return (
    <>
      <aside
        className={cn("sidebar", className, {
          sidebar_visible: isOpen,
        })}
        {...props}
      >
        <>
          <Logo />
          <NavAsideMain />
          <NavAsideFooter />
          <UserInfoBlock />
        </>
        <Icon
          className="sidebar-burger cursor-pointer"
          icon="sort"
          onClick={handleOpen}
        />
      </aside>
    </>
  );
};

export default Sidebar;
