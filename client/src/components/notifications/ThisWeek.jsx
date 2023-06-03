import React from "react";
import profile from "../../assets/icons/stories/profile.png";

const ThisWeek = () => {
    return (
        <div
            style={{ borderBottom: "1px solid #dbdbdb" }}
            className="flex flex-col gap-[15px] p-[15px]"
        >
            <h2 className="text-[16px] font-medium">This Week</h2>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <div className="w-[44px] h-[44px] cursor-pointer rounded-full overflow-hidden">
                        <img
                            src={profile}
                            alt="profile"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[14px]">
                            <span className="font-medium cursor-pointer">user1111</span> liked your
                            comment:
                        </h2>
                        <h2 className="cursor-pointer text-[14px] text-blue-text">
                            @user1111 <span className="text-[#000]">4d</span>
                        </h2>
                    </div>
                </div>
                <div className="w-[44px] h-[44px] cursor-pointer">
                    <img
                        src={profile}
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default ThisWeek;
