import React from "react";
import { ReactComponent as Instagram } from "../assets/icons/auth/insta.svg";
import { ReactComponent as Home } from "../assets/icons/menu/home.svg";
import { ReactComponent as Search } from "../assets/icons/menu/search.svg";
import { ReactComponent as Explore } from "../assets/icons/menu/explore.svg";
import { ReactComponent as Reel } from "../assets/icons/menu/reel.svg";
import { ReactComponent as Message } from "../assets/icons/menu/message.svg";
import { ReactComponent as Heart } from "../assets/icons/menu/heart.svg";
import { ReactComponent as Add } from "../assets/icons/menu/add.svg";
import { ReactComponent as Hamburger } from "../assets/icons/menu/hamburger.svg";

export const Menu = () => {
    const tabs = [
        { id: 1, name: "Home", icon: <Home /> },
        { id: 2, name: "Search", icon: <Search /> },
        { id: 3, name: "Explore", icon: <Explore /> },
        { id: 4, name: "Reels", icon: <Reel /> },
        { id: 5, name: "Messages", icon: <Message /> },
        { id: 6, name: "Notifications", icon: <Heart /> },
        { id: 7, name: "Create", icon: <Add /> },
    ];
    const flex = "flex items-center justify-between";
    return (
        <div
            className={`w-[100%] max-w-[270px] flex-col flex py-[30px] px-[30px] relative border-r-[1px] border-solid border-light-grey h-[100vh]`}
        >
            <div className="mb-[50px]">
                <Instagram className="w-[110px] cursor-pointer" />
            </div>
            <div className={`flex flex-col gap-[40px] items-start`}>
                {tabs.map((item) => (
                    <div
                        key={item.id}
                        className={`${flex} gap-[15px] cursor-pointer`}
                    >
                        <div className="w-[24px]">{item.icon}</div>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-[30px] w-[100%] left-[30px] flex items-center gap-[15px] cursor-pointer">
                <Hamburger />
                <h3>More</h3>
            </div>
        </div>
    );
};
