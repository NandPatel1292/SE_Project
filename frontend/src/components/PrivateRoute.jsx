import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../features/auth/authSclice";

const PrivateRoute = () => {
  const user = useSelector(selectUser);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
