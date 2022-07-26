import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, IRoute, publicRoutes } from "../../../utils/routes";
import { IAppRouterProps } from "./AppRouter.props";

const AppRouter = ({}: IAppRouterProps) => {
  return (
    <Routes>
      {authRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      {publicRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" key={"route-all"} element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
