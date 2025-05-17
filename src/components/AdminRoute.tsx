
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  if (isAuthenticated === null) {
    // Still checking authentication
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    // Not authenticated, redirect to login
    return <Navigate to="/admin/login" replace />;
  }

  // Authenticated, show protected content
  return <>{children}</>;
};

export default AdminRoute;
