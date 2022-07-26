import cn from "classnames";
import { useContext } from "react";
import { Context } from "../../../store/context";
import { IFooterProps } from "./Footer.props";
import "./Footer.scss";

export const Footer = ({ className, ...props }: IFooterProps) => {
  const { user } = useContext(Context).store;

  return (
    <footer></footer>
    // <footer className={cn("footer", className)} {...props}>
    //   {user.isActivated ? (
    //     <div>{user.isActivated}</div>
    //   ) : (
    //     <div>Вы не залогинены</div>
    //   )}
    // </footer>
  );
};
