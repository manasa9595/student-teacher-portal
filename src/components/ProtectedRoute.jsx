import { Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <div className="p-6">Loading...</div>;
  if (!currentUser) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
