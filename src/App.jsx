import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <div>Fetching user data</div>}

      {!isRefreshing && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute redirectTo="/login" component={<Home />} />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/" component={<Login />} />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute redirectTo="/" component={<Register />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;