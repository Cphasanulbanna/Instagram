import React, { useState } from "react";

//packages
import { useSelector, useDispatch } from "react-redux";

//components
import { SearchBar } from "./SearchBar";

import { showPanel } from "../redux/modalSlice";

//images
import { ReactComponent as Instagram } from "../assets/icons/auth/insta.svg";
import { ReactComponent as Home } from "../assets/icons/menu/home.svg";
import { ReactComponent as HomeBlack } from "../assets/icons/menu/home-black.svg";
import { ReactComponent as Search } from "../assets/icons/menu/search.svg";
import { ReactComponent as Explore } from "../assets/icons/menu/explore.svg";
import { ReactComponent as ExploreBlack } from "../assets/icons/menu/explore-black.svg";
import { ReactComponent as Reel } from "../assets/icons/menu/reel.svg";
import { ReactComponent as Message } from "../assets/icons/menu/message.svg";
import { ReactComponent as MessageBlack } from "../assets/icons/menu/message-black.svg";
import { ReactComponent as Heart } from "../assets/icons/menu/heart.svg";
import { ReactComponent as HeartBlack } from "../assets/icons/menu/heart-black.svg";
import { ReactComponent as Add } from "../assets/icons/menu/add.svg";
import { ReactComponent as AddBlack } from "../assets/icons/menu/add-black.svg";
import { ReactComponent as Hamburger } from "../assets/icons/menu/hamburger.svg";
import { ReactComponent as HamburgerBlack } from "../assets/icons/menu/hamburger-black.svg";
import { useNavigate } from "react-router-dom";
import { Notification } from "./notifications/Notification";
import { CreatePost } from "./modals/CreatePost";

export const Menu = () => {
    //states
    const [selectedPanel, setSelectedPanel] = useState("Home");
    const [viewSettings, setViewSettings] = useState(false);

    const SHOW_PANEL = useSelector((state) => state.modal.showPanel);

    const dispatch = useDispatch();

    const tabs = [
        { id: 1, path: "/", name: "Home", icon: <Home />, blackIcon: <HomeBlack /> },
        { id: 2, name: "Search", icon: <Search /> },
        { id: 3, path: "/", name: "Explore", icon: <Explore />, blackIcon: <ExploreBlack /> },
        { id: 4, path: "/reels", name: "Reels", icon: <Reel /> },
        { id: 5, path: "/", name: "Messages", icon: <Message />, blackIcon: <MessageBlack /> },
        { id: 6, name: "Notifications", icon: <Heart />, blackIcon: <HeartBlack /> },
        { id: 7, path: "/", name: "Create", icon: <Add />, blackIcon: <AddBlack /> },
    ];

    const handlePanels = (TYPE) => {
        const panelActions = {
            Search: "SEARCH_BAR",
            Notifications: "NOTIFICATION_BAR",
        };
        const panelType = panelActions[TYPE];
        if (panelType && SHOW_PANEL !== panelType) {
            dispatch(showPanel(panelType));
        }
    };

    const navigate = useNavigate();

    const select = (type, route) => {
        setSelectedPanel(type);
        dispatch(showPanel(""));
        route && navigate(route);
    };

    const showSettings = () => {
        setViewSettings((prev) => !prev);
    };

    //resusable class
    const flex = "flex items-center justify-between";

    //animations
    const MenuAnimation =
        SHOW_PANEL === "SEARCH_BAR" || SHOW_PANEL === "NOTIFICATION_BAR"
            ? { maxWidth: "70px", transition: "all 0.5s ease-in-out" }
            : { transition: "all 0.5s ease-in-out" };

    return (
        <>
            <SearchBar />
            <Notification />
            <CreatePost />
            <div
                style={MenuAnimation}
                className={`w-[100%] max-w-[270px] flex-col flex justify-between py-[30px] px-[30px]  border-r-[1px] border-solid border-light-grey h-[100vh] bg-text-white overflow-hidden fixed  z-[50] `}
            >
                <div className="flex flex-col">
                    <div className="mb-[50px]">
                        <Instagram className="w-[110px] cursor-pointer" />
                    </div>
                    <div className={`flex flex-col gap-[40px] items-start`}>
                        {tabs.map((item) => (
                            <div
                                key={item.id}
                                className={`${flex} gap-[15px] cursor-pointer`}
                                onClick={() => {
                                    select(item.name, item?.path);
                                    handlePanels(item.name);
                                }}
                            >
                                <div className={`w-[24px] ${selectedPanel}`}>
                                    {selectedPanel === item.name && item?.blackIcon
                                        ? item.blackIcon
                                        : item.icon}
                                </div>
                                <h3 className={selectedPanel === item.name ? "font-bold" : ""}>
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    onClick={showSettings}
                    className=" overflow-hidden flex items-center gap-[15px] cursor-pointer min-w-[150px]"
                >
                    {viewSettings ? <HamburgerBlack /> : <Hamburger />}
                    <h3 className={`${viewSettings && "font-bold"}`}>More</h3>
                </div>
            </div>
        </>
    );
};
