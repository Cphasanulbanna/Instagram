import React from "react";

import profile from "../../assets/icons/stories/profile.png";

import { ReactComponent as AddEmoji } from "../../assets/icons/posts/add-emoji.svg";

export const Interactions = () => {
    const imageStyle = "w-[20px] h-[20px] cursor-pointer rounded-full overflow-hidden";
    const textStyle = "cursor-pointer text-[14px] font-medium";
    return (
        <div className="flex flex-col gap-[10px] p-[10px]">
            <div className="flex items-center gap-[6px]">
                <div className="flex items-center gap-[6px]">
                    <div className="flex items-center">
                        <img
                            src={profile}
                            alt="profile"
                            className={imageStyle}
                        />
                        <img
                            src={profile}
                            alt="profile"
                            className={imageStyle}
                        />
                        <img
                            src={profile}
                            alt="profile"
                            className={imageStyle}
                        />
                    </div>
                    <span className="text-[14px]">Liked by</span>
                    <span className={textStyle}>person1</span>
                    <span className="text-[14px]">and</span>
                    <span className={textStyle}>others</span>
                </div>
            </div>
            <div className="flex items-center gap-[8px]">
                <h2 className="text-[14px] font-medium cursor-pointer">name</h2>
                <span className="cursor-pointer text-[14px]">caption</span>
            </div>
            <div className="flex gap-[5px] items-center">
                <a
                    className="cursor-pointer text-blue-text text-[14px]"
                    href=""
                >
                    #instagoog
                </a>
                <a
                    className="cursor-pointer text-blue-text text-[14px]"
                    href=""
                >
                    #insta
                </a>
            </div>
            <h3 className="text-text-grey cursor-pointer text-[14px]">View all 8 comments</h3>
            <div className="flex justify-between items-center border-t-[1px] border-t-solid border-t-light-grey">
                <div className="flex items-center gap-[10px]">
                    <div className="cuesor-pointer w-[24px] h-[24px]">
                        <AddEmoji />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            className="w-[100%] h-[100%] py-[4px] px-[10px] text-[14px]"
                        />
                    </div>
                </div>
                <h3 className="cursor-pointer font-[500] text-[14px] text-sky-blue">Post</h3>
            </div>
        </div>
    );
};
