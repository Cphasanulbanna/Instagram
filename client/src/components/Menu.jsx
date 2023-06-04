import React, { useEffect, useRef, useState } from "react";

//components
import { SearchBar } from "./SearchBar";

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

export const Menu = () => {
    //states
    const [selectedMenu, setSelectedMenu] = useState("Home");
    const [notiOpen, setNotiOpen] = useState(false);
    const [searchOpen, setSearchOPen] = useState(false);
    const [openPostModal, setOpenPostModal] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    // console.log(searchOpen, "///");
    const tabs = [
        { id: 1, path: "/", menu: "Home", icon: <Home />, blackIcon: <HomeBlack />, type: "link" },
        { id: 2, menu: "Search", icon: <Search />, class: "search", type: "modal" },
        {
            id: 3,
            path: "/",
            menu: "Explore",
            icon: <Explore />,
            blackIcon: <ExploreBlack />,
            type: "link",
        },
        { id: 4, path: "/reels", menu: "Reels", icon: <Reel />, type: "link" },
        {
            id: 5,
            path: "/",
            menu: "Messages",
            icon: <Message />,
            blackIcon: <MessageBlack />,
            type: "link",
        },
        {
            id: 6,
            menu: "Notifications",
            icon: <Heart />,
            blackIcon: <HeartBlack />,
            class: "notification",
            type: "modal",
        },
        { id: 7, path: "/", menu: "Create", icon: <Add />, blackIcon: <AddBlack />, type: "link" },
    ];

    const navigate = useNavigate();
    const handleMenus = (menu, route) => {
        setSelectedMenu((prev) =>
            prev !== menu ? menu : route !== "/reels" ? "Home" : route === "" ? "Home" : ""
        );
        route && navigate(route);
        setSearchOPen((prev) => menu === "Search" && !prev);
        setNotiOpen((prev) => menu === "Notifications" && !prev);
        setOpenPostModal((prev) => menu === "Create" && !prev);
        setOpenSettings((prev) => menu === "Settings" && !prev);
    };

    console.log(selectedMenu, "***");

    // useEffect(() => {
    //     if (
    //         openPostModal === false ||
    //         openSettings === false ||
    //         searchOpen === false ||
    //         notiOpen === false
    //     ) {
    //         return setSelectedMenu("Home");
    //     }
    //     // return setSelectedMenu("Home");
    // }, [openPostModal, openPostModal, searchOpen, notiOpen]);

    //resusable class
    const flex = "flex items-center justify-between";
    const transition = "all 0.5s ease-in-out";

    //animations
    const MenuAnimation =
        notiOpen || searchOpen || openPostModal
            ? { maxWidth: "70px", transition: transition, transitionDelay: "unset" }
            : { transition: transition, transitionDelay: "0.2s" };

    const LogoAnimation2 =
        notiOpen || searchOpen || openPostModal
            ? { transform: "scale(1, 1)", transition: transition }
            : { transform: "scale(0, 0)", transition: transition };

    const LogoAnimation1 =
        notiOpen || searchOpen || openPostModal
            ? { transition: transition, opacity: 0 }
            : { transition: transition, opacity: 1 };

    const tabRefs = tabs.map(() => useRef(null));

    const notificationIconRef = tabRefs[5];
    const searchIconref = tabRefs[1];
    const settingsIconRef = useRef(null);

    return (
        <>
            <SearchBar
                searchOpen={searchOpen}
                setSelectedMenu={setSelectedMenu}
                setSearchOPen={setSearchOPen}
                searchIconref={searchIconref}
            />

            <Notification
                notiOpen={notiOpen}
                setNotiOpen={setNotiOpen}
                notificationIconRef={notificationIconRef}
                setSelectedMenu={setSelectedMenu}
            />

            {openPostModal && (
                <CreatePost
                    setSelectedMenu={setSelectedMenu}
                    setOpenPostModal={setOpenPostModal}
                />
            )}
            {openSettings && (
                <Settings
                    setOpenSettings={setOpenSettings}
                    settingsIconRef={settingsIconRef}
                />
            )}

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
                    ref={settingsIconRef}
                    onClick={() => {
                        handleMenus("Settings");
                    }}
                    className=" overflow-hidden flex items-center gap-[15px] cursor-pointer min-w-[150px]"
                >
                    {openSettings ? <HamburgerBlack /> : <Hamburger />}
                    <h3 className={`${openSettings && "font-bold"}`}>More</h3>
                </div>
            </div>
        </>
    );
};
