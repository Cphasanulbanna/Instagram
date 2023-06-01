import React, { useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "../../Menu";
import { Home } from "../../../pages/Home";
import { Reels } from "../../Reels";

const HomeRouter = () => {
    const [changeScreenWidth, setChangeScreenWidth] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/reels") {
            setChangeScreenWidth(true);
        }
    }, [location]);

    const conditionalStyle = "max-w-[unset] w-[100%] ml-[270px] flex justify-center";
    return (
        <section className="flex">
            <Menu />
            <section
                className={`${
                    changeScreenWidth && conditionalStyle
                } max-w-[935px] pt-[40px] px-[20px] mx-[0 auto] ml-[450px]`}
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
