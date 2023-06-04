import React, { useRef } from "react";
import { RequestPanel } from "./RequestPanel";
import { useDispatch, useSelector } from "react-redux";
import ThisWeek from "./ThisWeek";
import ThisMonth from "./ThisMonth";
import Earlier from "./Earlier";
import { showPanel } from "../../redux/modalSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useLocation } from "react-router-dom";

export const Notification = ({ clickedItemRef, setSelectedMenu }) => {
    const SHOW_PANEL = useSelector((state) => state.modal.showPanel);
    const dispatch = useDispatch();
    const notificanbarRef = useRef(null);

    useOutsideClick(notificanbarRef, () => handle(), clickedItemRef);
    const location = useLocation();

    const handle = () => {
        setSelectedMenu(location.pathname === "/reels" ? "Reels" : "");
        dispatch(showPanel(""));
    };
    return (
        <div
            ref={notificanbarRef}
            style={
                SHOW_PANEL === "NOTIFICATION_BAR"
                    ? { left: "70px", transition: "all 0.5s ease-in-out", opacity: "1" }
                    : { transition: "all 0.5s ease-in-out", opacity: "0.3" }
            }
            className="max-w-[399px] w-[100%] flex flex-col py-[10px] verflow-hidden fixed z-[1] left-[-335px] bg-text-white h-[100vh] border-r-[1px] border-solid border-light-grey"
        >
            <RequestPanel />
            <ThisWeek />
            <ThisMonth />
            <Earlier />
        </div>
    );
};
