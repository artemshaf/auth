import { MainPage } from "../pages";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardItem from "../pages/Dashboard/DashboardItem/DashboardItem";
import Documentation from "../pages/Documentation/Documentation";
import Login from "../pages/Login/Login";
import Projects from "../pages/Projects/Projects";
import Register from "../pages/Register/Register";
import Units from "../pages/Units/Units";
import {
  DASHBOARD_ITEM_ROUTE_ID,
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
    path: DASHBOARD_ITEM_ROUTE_ID,
    element: <DashboardItem />,
  },
  {
    path: UNITS_ROUTE,
    element: <Units />,
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
    element: <Documentation />,
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
