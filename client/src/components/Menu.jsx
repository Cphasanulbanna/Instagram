import React, { useState } from "react";

//packages
import { useSelector, useDispatch } from "react-redux";

//components
import { SearchBar } from "./SearchBar";

import { showSearchBar } from "../redux/modalSlice";

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

export const Menu = () => {
    //states
    const [selectedIcon, setSelectedIcon] = useState("Home");
    const [viewSettings, setViewSettings] = useState(false);

    const showsearchbar = useSelector((state) => state.modal.showSearchBar);
    const dispatch = useDispatch();

    const tabs = [
        { id: 1, name: "Home", icon: <Home />, blackIcon: <HomeBlack /> },
        { id: 2, name: "Search", icon: <Search /> },
        { id: 3, name: "Explore", icon: <Explore />, blackIcon: <ExploreBlack /> },
        { id: 4, name: "Reels", icon: <Reel /> },
        { id: 5, name: "Messages", icon: <Message />, blackIcon: <MessageBlack /> },
        { id: 6, name: "Notifications", icon: <Heart />, blackIcon: <HeartBlack /> },
        { id: 7, name: "Create", icon: <Add />, blackIcon: <AddBlack /> },
    ];

    const openModal = (name) => {
        switch (name) {
            case "Search":
                dispatch(showSearchBar());
                break;

            default:
                break;
        }
    };

    const select = (icon) => {
        setSelectedIcon(icon);
    };

    const showSettings = () => {
        setViewSettings((prev) => !prev);
    };

    //resusable class
    const flex = "flex items-center justify-between";

    return (
        <>
            <SearchBar />
            <div
                style={
                    showsearchbar
                        ? { maxWidth: "70px", transition: "all 0.5s ease-in-out" }
                        : { transition: "all 0.5s ease-in-out" }
                }
                className={`w-[100%] max-w-[270px] flex-col flex justify-between py-[30px] px-[30px]  border-r-[1px] border-solid border-light-grey h-[100vh] bg-text-white overflow-hidden fixed z-100 left-0 top-0`}
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
                                    select(item.name);
                                    openModal(item.name);
                                }}
                            >
                                <div className={`w-[24px] ${selectedIcon}`}>
                                    {selectedIcon === item.name && item?.blackIcon
                                        ? item.blackIcon
                                        : item.icon}
                                </div>
                                <h3 className={selectedIcon === item.name ? "font-bold" : ""}>
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    onClick={showSettings}
                    className=" overflow-hidden flex items-center gap-[15px] cursor-pointer min-w-[70px] w-350px"
                >
                    {viewSettings ? (
                        <div className="w-[24px] h-[24px]">
                            <HamburgerBlack />
                        </div>
                    ) : (
                        <div>
                            <Hamburger />
                        </div>
                    )}
                    <h3
                        style={
                            showsearchbar
                                ? { width: "0px", transition: "all 0.5s ease-in-out" }
                                : { transition: "all 0.5s ease-in-out" }
                        }
                        className={`${viewSettings && "font-bold"}`}
                    >
                        More
                    </h3>
                </div>
            </div>
        </>
    );
};
