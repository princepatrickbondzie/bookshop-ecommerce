import { Route, Redirect } from "react-router-dom";
import { useUserState } from "../state/store";

const AdminRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);
  const user = useUserState((state) => state.user);

  return (
    <Route
      path={path}
      render={(props) => {
        if (isLoggedIn && user?.role === "admin") {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/admin_login" />;
        }
      }}
      {...rest}
    />
  );
};

export default AdminRoute;
