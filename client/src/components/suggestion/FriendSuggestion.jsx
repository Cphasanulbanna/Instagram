import React from "react";

import profile from "../../assets/icons/stories/profile.png";

export const FriendSuggestion = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[15px] items-center justify-between">
                <div className="w-[32px] h-[32px] cursor-pointer rounded-full overflow-hidden">
                    <img
                        src={profile}
                        alt="profile"
                    />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <h5 className="text-[14px] font-medium">user_name___</h5>
                    <p className="text-[12px] cursor-pointer text-text-grey">
                        Followed by <span>user__</span>+ <span>25</span>more
                    </p>
                </div>
                <button className="text-[12px] cursor-pointer text-sky-blue-2 font-medium hover:text-blue-text">
                    Follow
                </button>
            </div>
        </div>
    );
};
