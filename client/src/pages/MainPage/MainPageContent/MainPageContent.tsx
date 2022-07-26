import cn from "classnames";
import { IMainPageContentProps } from "./MainPageContent.props";
import "./MainPageContent.scss";

const MainPageContent = ({ className, ...props }: IMainPageContentProps) => {
  return (
    <div className={cn(className)} {...props}>
      mAIN PAGE!
    </div>
  );
};

export default MainPageContent;
