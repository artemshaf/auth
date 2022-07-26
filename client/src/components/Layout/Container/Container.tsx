import cn from "classnames";
import { IContainerProps } from "./Container.props";
import "./Container.scss";

export const Container = ({ className, ...props }: IContainerProps) => {
  return (
    <section className={cn("custom-container", className)} {...props}></section>
  );
};
