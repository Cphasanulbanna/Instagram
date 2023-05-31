import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import AuthRouter from "./routers/AuthRouter";
import { Home } from "../../pages/Home";

const AppRouter = () => {
    const login = true;
    return (
        <Routes>
            <Route
                path="/accounts/*"
                element={<AuthRouter />}
            />
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/"
                element={!login ? <Navigate to="/accounts/login" /> : <Navigate to="/" />}
            />
        </Routes>
    );
};

export default AppRouter;
