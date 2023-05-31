import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import AuthRouter from "./routers/AuthRouter";

const AppRouter = () => {
    const login = false;
    return (
        <Routes>
            <Route
                path="/accounts/*"
                element={<AuthRouter />}
            />
            <Route
                path="/"
                element={!login && <Navigate to="/accounts/login" />}
            />
        </Routes>
    );
};

export default AppRouter;
