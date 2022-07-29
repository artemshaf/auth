import cn from "classnames";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { store } from "../../../store/context";
import { LOGIN_ROUTE } from "../../../utils/consts";
import { IMainPageContentProps } from "./MainPageContent.props";
import "./MainPageContent.scss";

const MainPageContent = ({ className, ...props }: IMainPageContentProps) => {
  const navigate = useNavigate();
  return (
    <div className={cn(className)} {...props}>
      <button
        onClick={() => {
          store.logout();
        }}
      >
        ВЫйти
      </button>
      <button
        onClick={() => {
          navigate(LOGIN_ROUTE);
        }}
      >
        Зайти
      </button>
    </div>
  );
};

export default observer(MainPageContent);
