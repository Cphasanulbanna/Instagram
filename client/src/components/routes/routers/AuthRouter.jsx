import React from "react";

//icons
import { Login } from "../../auth/Login";

import { Routes, Route } from "react-router-dom";
import { Signup } from "../../auth/Signup";
import Footer from "../../auth/Footer";

const AuthRouter = () => {
    const flex = "flex justify-center";

    return (
        <section className="min-h-[100vh]">
            <section className={`w-[70%] mx-auto items-center flex-col py-[15px] ${flex}  `}>
                <Routes>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/signup"
                        element={<Signup />}
                    />
                </Routes>
                <Footer />
            </section>
        </section>
    );
};

export default AuthRouter;
