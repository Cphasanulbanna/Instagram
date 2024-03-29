import React from "react";

import { Routes, Route } from "react-router-dom";
import { Menu } from "../../Menu";
import { Home } from "../../../pages/Home";
import { Reels } from "../../Reels";
import { useDispatch, useSelector } from "react-redux";
import { showPanel } from "../../../redux/modalSlice";

const HomeRouter = () => {
    const dispatch = useDispatch();
    const SHOW_PANEL = useSelector((state) => state.modal.showPanel);
    return (
        <section className="flex justify-between">
            <div className="max-w-[270px] w-[20%] lg1:w-[70px] lg1:max-w-[unset]">
                <Menu />
            </div>

            <section
                onClick={() => {
                    dispatch(showPanel(""));
                }}
                className={`pt-[40px] lg1:p-0 px-[20px] w-full flex justify-center transition`}
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
