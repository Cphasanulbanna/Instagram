import React from "react";

//icons
import { Login } from "./Login";

import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import Footer from "./Footer";

const AuthWrapper = () => {
    const flex = "flex justify-center";

    return (
        <section className="min-h-[100vh]">
            <section className={`w-[70%] mx-auto items-center flex-col pt-[15px] ${flex}  `}>
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

export default AuthWrapper;
