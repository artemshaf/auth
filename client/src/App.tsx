import { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./store/context";
import { withLayout } from "./components/Layout/Layout";
import { BrowserRouter, Navigate } from "react-router-dom";
import AppRouter from "./components/Bussiness/AppRouter/AppRouter";
import { LOGIN_ROUTE } from "./utils/consts";

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  if (!store.isAuth) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return <></>;
};

export default observer(withLayout(App));
