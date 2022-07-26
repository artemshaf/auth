import { IMainPageProps } from "./MainPage.props";
import "./MainPage.scss";
import MainPageContent from "./MainPageContent/MainPageContent";

export const MainPage = ({ className, ...props }: IMainPageProps) => {
  return <MainPageContent {...props} />;
};
