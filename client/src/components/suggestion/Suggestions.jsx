import React from "react";

import profile from "../../assets/icons/stories/profile.png";
import { FriendSuggestion } from "./FriendSuggestion";

export const Suggestions = () => {
    const buttons = [
        "About",
        "Help",
        "Press",
        "API",
        "Jobs",
        "Privacy",
        "Terms",
        "Locations",
        "Language",
        "English",
        "Meta",
        "Verified",
    ];
    return (
        <div className="flex flex-col gap-[12px] p-[10px] max-w-[320px] w-[100%]">
            <div className="flex items-center justify-between gap-[15px]">
                <div className="flex items-center justify-between gap-[20px]">
                    <div className="w-[56px] h-[56px] cursor-pointer rounded-full overflow-hidden">
                        <img
                            src={profile}
                            alt="profile"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-[14px] font-medium cursor-pointer">user_name</h4>
                        <span className="text-[14px]">status</span>
                    </div>
                </div>
                <button className="text-[12px] font-medium cursor-pointer text-sky-blue">
                    Switch
                </button>
            </div>

            <div className="flex items-center justify-between">
                <h4 className="text-[14px] font-medium text-text-grey">Suggested for you</h4>
                <button className="cursor-pointer text-[14px] hover:text-text-grey">See All</button>
            </div>
            <FriendSuggestion />
            <FriendSuggestion />
            <FriendSuggestion />
            <FriendSuggestion />

            <div className="flex gap-[8px] items-center flex-wrap mt-[20px]">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className="text-[12px] cursor-pointer text-text-grey"
                    >
                        {button}
                    </button>
                ))}
            </div>
            <p className="text-text-grey text-[12px] mt-[20px]">© 2023 INSTAGRAM FROM META</p>
        </div>
    );
};
