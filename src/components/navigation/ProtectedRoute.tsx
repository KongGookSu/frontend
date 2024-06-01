import { Navigate, Outlet } from "react-router-dom";

import { useUserStore } from "@/store/store";

const ProtectedRoute = () => {
    const accessToken = useUserStore((state) => state.accessToken);

    return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
