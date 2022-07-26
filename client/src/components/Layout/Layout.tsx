import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context, store } from "../../store/context";
import { Footer } from "./Footer/Footer";
import { ILayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import AppRouter from "../Bussiness/AppRouter/AppRouter";
import Sidebar from "./Sidebar/Sidebar";
import "./Layout.scss";

export const Layout = ({ children, ...props }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        <Context.Provider
          value={{
            store,
          }}
        >
          <Layout>
            <section className={"main"}>
              <Sidebar className="main__aside" />
              <section className={"main__body"}>
                <AppRouter />
              </section>
            </section>
          </Layout>
        </Context.Provider>
      </BrowserRouter>
    );
  };
};
