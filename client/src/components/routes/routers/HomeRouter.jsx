import React from "react";

import { Routes, Route } from "react-router-dom";
import { Menu } from "../../Menu";
import { Home } from "../../../pages/Home";
import { Reels } from "../../Reels";

const HomeRouter = () => {
    return (
        <section className="flex justify-between">
            <div className="max-w-[270px] w-[20%]">
                <Menu />
            </div>

            <section className={`pt-[40px] px-[20px] w-full flex justify-center transition`}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/reels"
                        element={<Reels />}
                    />
                </Routes>
            </section>
        </section>
    );
};

export default HomeRouter;
