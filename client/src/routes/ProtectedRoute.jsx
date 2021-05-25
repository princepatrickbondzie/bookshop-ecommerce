import { Route, Redirect } from "react-router-dom";
import { useUserState } from "../state/store";

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);

  return (
    <Route
      path={path}
      render={(props) => {
        if (isLoggedIn) {
          <Component {...rest} {...props} />;
        } else {
          <Redirect to="/login" />;
        }
      }}
      {...rest}
    />
  );
};

export default ProtectedRoute;
