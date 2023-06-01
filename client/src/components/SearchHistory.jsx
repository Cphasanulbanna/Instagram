import React from "react";

import profile from "../assets/icons/stories/profile.png";

export const SearchHistory = () => {
    return (
        <div className="flex gap-[15px] items-center justify-between overflow-hidden">
            <div className="flex items-center gap-[15px]">
                <div className="w-[45px] h-[45px] cursor-pointer rounded-full overflow-hidden">
                    <img
                        src={profile}
                        alt="profile"
                    />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h5 className="text-[14px] font-medium">user_name___</h5>
                    <p className="text-[12px] cursor-pointer text-text-grey">name</p>
                </div>
            </div>

            <button className=" cursor-pointer w-[20px] h-[20px]">close</button>
        </div>
    );
};
