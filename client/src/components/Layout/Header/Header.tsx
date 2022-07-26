import cn from "classnames";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../store/context";
import { IHeaderProps } from "./Header.props";
import "./Header.scss";

const Header = ({ className, ...props }: IHeaderProps) => {
  const { user } = useContext(Context).store;

  return (
    <header></header>
    // <header className={cn("header", className)} {...props}>
    //   {user && (
    //     <>
    //       <div>{user.email}</div>
    //       <div>{user.isActivated}</div>
    //     </>
    //   )}
    // </header>
  );
};

export default observer(Header);
