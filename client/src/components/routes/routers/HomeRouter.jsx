import React from "react";

import { Routes, Route } from "react-router-dom";
import { Menu } from "../../Menu";
import { Home } from "../../../pages/Home";

const HomeRouter = () => {
    return (
        <section className="flex">
            <Menu />
            <section className="max-w-[935px] pt-[40px] px-[20px] mx-[0 auto]">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </section>
        </section>
    );
};

export default HomeRouter;
