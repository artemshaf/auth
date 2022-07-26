import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./store/context";
import LoginForm from "./components/Bussiness/Login/LoginForm";
import { withLayout } from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Bussiness/AppRouter/AppRouter";

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  // if (store.isLoading) {
  //   return <div>Загрузка...</div>;
  // }

  // if (!store.isAuth) {
  //   return <LoginForm>Зарегистрируйтесь</LoginForm>;
  // }

  return <></>;
};

export default observer(withLayout(App));
