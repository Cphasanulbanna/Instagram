import React from "react";
import profile from "../../assets/icons/stories/profile.png";

const ThisMonth = () => {
    return (
        <div
            style={{ borderBottom: "1px solid #dbdbdb" }}
            className="flex flex-col gap-[15px] p-[15px]"
        >
            <h2 className="text-[16px] font-medium">This Month</h2>
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
                            <span className="font-medium cursor-pointer">user1111</span> started
                            following you <span className="text-[#737373]">4w</span>
                        </h2>
                    </div>
                </div>
                <div className="cursor-pointer text-[14px] bg-[#efefef] py-[7px] px-[16px] rounded-[6px] overflow-hidden ">
                    <button>Following</button>
                </div>
            </div>
        </div>
    );
};

export default ThisMonth;
