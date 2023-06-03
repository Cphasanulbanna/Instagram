import React, { useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "../../Menu";
import { Home } from "../../../pages/Home";
import { Reels } from "../../Reels";

const HomeRouter = () => {
    const location = useLocation();

    return (
        <section className="flex justify-between">
            <Menu />
            <section
                style={{
                    maxWidth: "calc(100% - 480px)",
                    margin: `${location.pathname === "/" ? "0 auto" : ""} `,
                }}
                className={`pt-[40px] px-[20px] flex justify-end transition w-full`}
            >
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
