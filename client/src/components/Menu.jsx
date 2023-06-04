import React, { createRef, useEffect, useRef, useState } from "react";

//packages
import { useSelector, useDispatch } from "react-redux";

//components
import { SearchBar } from "./SearchBar";

import { showPanel } from "../redux/modalSlice";

//images
import { ReactComponent as Instagram } from "../assets/icons/auth/insta.svg";
import { ReactComponent as InstagramSmall } from "../assets/icons/menu/instagramlogo-small.svg";
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
import { Settings } from "./modals/Settings";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useClickAway } from "ahooks";
// import useOutsideClick from "../hooks/useOutsideClick";

export const Menu = () => {
    //states
    const [selectedMenu, setSelectedMenu] = useState("Home");

    const SHOW_PANEL = useSelector((state) => state.modal.showPanel);

    const dispatch = useDispatch();

    const tabs = [
        { id: 1, path: "/", menu: "Home", icon: <Home />, blackIcon: <HomeBlack /> },
        { id: 2, menu: "Search", icon: <Search />, class: "search" },
        { id: 3, path: "/", menu: "Explore", icon: <Explore />, blackIcon: <ExploreBlack /> },
        { id: 4, path: "/reels", menu: "Reels", icon: <Reel /> },
        { id: 5, path: "/", menu: "Messages", icon: <Message />, blackIcon: <MessageBlack /> },
        {
            id: 6,
            menu: "Notifications",
            icon: <Heart />,
            blackIcon: <HeartBlack />,
            class: "notification",
        },
        { id: 7, path: "/", menu: "Create", icon: <Add />, blackIcon: <AddBlack /> },
    ];

    const navigate = useNavigate();

    useEffect(() => {
        if (SHOW_PANEL === "" && location.pathname === "/") {
            setSelectedMenu("Home");
        }
        if (SHOW_PANEL === "" && location.pathname === "/reels") {
            setSelectedMenu("Reels");
        }
    }, [SHOW_PANEL]);

    const handleMenus = (MENU, ROUTE) => {
        setSelectedMenu((prev) => (prev !== MENU ? MENU : ROUTE !== "/reels" ? "Home" : ""));
        ROUTE && navigate(ROUTE);
        const menuActions = {
            Search: "SEARCH_BAR",
            Notifications: "NOTIFICATION_BAR",
            Create: "CREATE_POST_MODAL",
            Settings: "SHOW_SETTINGS",
        };
        const menuType = menuActions[MENU];
        if (menuType && SHOW_PANEL !== menuType) {
            dispatch(showPanel(menuType));
        } else {
            dispatch(showPanel(""));
        }
    };
    //resusable class
    const flex = "flex items-center justify-between";
    const transition = "all 0.5s ease-in-out";

    //animations
    const MenuAnimation =
        SHOW_PANEL === "SEARCH_BAR" || SHOW_PANEL === "NOTIFICATION_BAR"
            ? { maxWidth: "70px", transition: transition, transitionDelay: "unset" }
            : { transition: transition, transitionDelay: "0.2s" };

    const LogoAnimation2 =
        SHOW_PANEL === "SEARCH_BAR" || SHOW_PANEL === "NOTIFICATION_BAR"
            ? { transform: "scale(1, 1)", transition: transition }
            : { transform: "scale(0, 0)", transition: transition };

    const LogoAnimation1 =
        SHOW_PANEL === "SEARCH_BAR" || SHOW_PANEL === "NOTIFICATION_BAR"
            ? { transition: transition, opacity: 0 }
            : { transition: transition, opacity: 1 };

    const tabRefs = tabs.map(() => useRef(null));

    // useOutsideClick(notificationRef, notificationIconRef);

    const notificationIconRef = tabRefs[5];
    const notificationRef = useRef(null);

    const searchIconRef = tabRefs[1];
    const searchbarRef = useRef(null);

    useOutsideClick(searchbarRef);
    useOutsideClick(notificationRef);

    console.log(SHOW_PANEL, "***");

    return (
        <>
            <SearchBar
                setSelectedMenu={setSelectedMenu}
                searchbarRef={searchbarRef}
            />
            <Notification
                notificationRef={notificationRef}
                setSelectedMenu={setSelectedMenu}
            />
            {SHOW_PANEL === "CREATE_POST_MODAL" && <CreatePost setSelectedMenu={setSelectedMenu} />}
            {SHOW_PANEL === "SHOW_SETTINGS" && <Settings />}

            <div
                style={MenuAnimation}
                className={`w-[100%] max-w-[270px] lg1:max-w-[unset] lg1:w-[70px] lg4:max-w-[70px] flex-col flex justify-between py-[30px] px-[30px]  border-r-[1px] border-solid border-light-grey h-[100vh] bg-text-white overflow-hidden fixed  z-[50] `}
            >
                <div className="flex flex-col">
                    <div className="mb-[50px]">
                        <div
                            className="relative"
                            style={{
                                transition: "all 0.5s ease-in-out",
                            }}
                        >
                            <Instagram
                                style={LogoAnimation1}
                                className="w-[110px] cursor-pointer lg4:hidden"
                            />
                            <InstagramSmall
                                style={LogoAnimation2}
                                className={`absolute z-50 left-[0px] top-[0px] scale-0 cursor-pointer w-[24px] h-[24px] lg1:hidden`}
                            />
                            <InstagramSmall className={` w-[24px] h-[24px] hidden lg4:block`} />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-[40px] items-start`}>
                        {tabs.map((item, index) => {
                            return (
                                <div
                                    ref={tabRefs[index]}
                                    key={item.id}
                                    className={`${flex} gap-[15px] cursor-pointer ${item?.class}`}
                                    onClick={() => {
                                        handleMenus(item.menu, item?.path);
                                    }}
                                >
                                    <div className={`w-[24px] ${selectedMenu}`}>
                                        {selectedMenu === item.menu && item?.blackIcon
                                            ? item.blackIcon
                                            : item.icon}
                                    </div>
                                    <h3 className={selectedMenu === item.menu ? "font-bold" : ""}>
                                        {item.menu}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    onClick={() => {
                        handleMenus("Settings");
                    }}
                    className=" overflow-hidden flex items-center gap-[15px] cursor-pointer min-w-[150px]"
                >
                    {SHOW_PANEL === "SHOW_SETTINGS" ? <HamburgerBlack /> : <Hamburger />}
                    <h3 className={`${SHOW_PANEL === "SHOW_SETTINGS" && "font-bold"}`}>More</h3>
                </div>
            </div>
        </>
    );
};
