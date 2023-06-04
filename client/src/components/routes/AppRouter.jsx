import React from "react";

import { Routes, Route } from "react-router-dom";
import AuthRouter from "./routers/AuthRouter";
import HomeRouter from "./routers/HomeRouter";

const AppRouter = () => {
    // const login = true;
    return (
        <Routes>
            <Route
                path="/accounts/*"
                element={<AuthRouter />}
            />
            <Route
                path="/*"
                element={<HomeRouter />}
            />
            {/* <Route
                path="/"
                element={!login ? <Navigate to="/accounts/login" /> : <Navigate to="/*" />}
            /> */}
        </Routes>
    );
};

export default AppRouter;
