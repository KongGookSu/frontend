import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useUserStore } from "@/store/store";

const ProtectedRoute: React.FC = () => {
    const { currentUser } = useUserStore();

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
