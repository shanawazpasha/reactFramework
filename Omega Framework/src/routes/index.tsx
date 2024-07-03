import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Home from "pages/home";
import Page1 from "pages/page1";
import Page2 from "pages/page2";

/*
  AppRoutes object contains path strings to use across application
*/
export const AppRoutes = {
  default: "/",
  page1: "/page1",
  page2: "/page2",
  login: "/login",
};

/*
  routes object returns <Routes> components with <Route> inside it
*/
const routes: RouteObject[] = [
  {
    path: AppRoutes.login,
    element: <div />,
  },
  {
    element: (
    //   <RequireAuth>
        <Home />
    //   </RequireAuth>
    ),
    children: [
      {
        path: AppRoutes.default,
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: AppRoutes.page1,
        element: (
          <>
            <Page1 />
          </>
        ),
      },
      {
        path: AppRoutes.page2,
        element: (
          <>
            <Page2 />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={AppRoutes.default} />,
  },
];

export const AppRouter = () => {
  const renderRoutes = useRoutes(routes);
  return renderRoutes;
};
