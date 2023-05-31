import React from "react";

import profile from "../assets/icons/stories/profile.png";
import { ReactComponent as Dots } from "../assets/icons/posts/3dots.svg";

export const Post = () => {
    return (
        <div className="py-[8px] border-solid border-[1px] border-light-grey rounded-[5px] overflow-hidden">
            <div className="flex items-center justify-between px-[7px]">
                <div className="flex items-center gap-[10px]">
                    <div className="w-[42px] h-[42px] cursor-pointer rounded-full overflow-hidden border-[2px] border-solid border-r-blue-text-2 p-[2px]">
                        <img
                            src={profile}
                            alt="profile"
                        />
                    </div>
                    <div className="flex gap-[6px] flex-col">
                        <h4 className="cursor-pointer text-text-black text-[12px] font-semibold">
                            foodie_from_kl10
                        </h4>
                        <span className="text-[12px] cursor-pointer">Original Audio</span>
                    </div>
                </div>
                <div className="cursor-pointer w-[24px] h-[24px]">
                    <Dots />
                </div>
            </div>
        </div>
    );
};
