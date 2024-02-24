import { useSelector } from "react-redux";

export const useAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);
  const user = useSelector((state) => state.auth.user);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};