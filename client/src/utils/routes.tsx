import { MainPage } from "../pages";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Projects from "../pages/Projects/Projects";
import Register from "../pages/Register/Register";
import {
  DASHBOARD_ROUTE,
  DOCUMENTATION_ROUTE,
  HELP_ROUTE,
  INOVOICES_ROUTE,
  INTEGRATIONS_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PROJECTS_ROUTE,
  REGISTER_ROUTE,
  SETTINGS_ROUTE,
  SOCIALS_ROUTE,
  UNITS_ROUTE,
} from "./consts";

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const authRoutes: IRoute[] = [
  {
    path: DASHBOARD_ROUTE,
    element: <Dashboard />,
  },
  {
    path: UNITS_ROUTE,
    element: <MainPage />,
  },
  {
    path: INOVOICES_ROUTE,
    element: <MainPage />,
  },
  {
    path: PROJECTS_ROUTE,
    element: <Projects />,
  },
  {
    path: SOCIALS_ROUTE,
    element: <MainPage />,
  },
  {
    path: INTEGRATIONS_ROUTE,
    element: <MainPage />,
  },
  {
    path: DOCUMENTATION_ROUTE,
    element: <MainPage />,
  },
  {
    path: SETTINGS_ROUTE,
    element: <MainPage />,
  },
  {
    path: HELP_ROUTE,
    element: <MainPage />,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
  {
    path: REGISTER_ROUTE,
    element: <Register />,
  },
];
