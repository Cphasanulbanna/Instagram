import React, { useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "../../Menu";
import { Home } from "../../../pages/Home";
import { Reels } from "../../Reels";

const HomeRouter = () => {
    return (
        <section className="flex">
            <Menu />
            <section
                className={` max-w-[935px] pt-[40px] px-[20px] mx-[0 auto] transition w-full ml-[450px]`}
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
