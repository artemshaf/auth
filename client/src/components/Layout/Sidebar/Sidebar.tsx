import cn from "classnames";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import NavAsideFooter from "../../Plain/NavAsideFooter/NavAsideFooter";
import NavAsideMain from "../../Plain/NavAsideMain/NavAsideMain";
import Logo from "../../Plain/Logo/Logo";
import UserInfoBlock from "../../Plain/UserInfoBlock/UserInfoBlock";
import { ISideBarProps } from "./Sidebar.props";
import "./Sidebar.scss";
import Icon from "../../UI/Icon/Icon";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { useMatchMedia } from "../../../hooks/use-match-media";
import { observer } from "mobx-react-lite";
import { store } from "../../../store/context";

const Sidebar = ({ className, ...props }: ISideBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>();

  const { md } = useMatchMedia();

  const handleOpen = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!md) {
      return () => {
        document.body.style.overflow = "auto";
      };
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
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
          <Icon
            className="sidebar__burger cursor-pointer"
            icon="sort"
            onClick={handleOpen}
          />
          <Logo className="sidebar__logo" />
          <NavAsideMain />
          <NavAsideFooter />
          <UserInfoBlock
            className="sidebar__user-info"
            name={store.user.email ? store.user.email : undefined}
            roles={store.user.roles ? store.user.roles : [""]}
          />
        </>
      </aside>
    </>
  );
};

export default observer(Sidebar);
