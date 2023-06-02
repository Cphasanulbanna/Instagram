import React from "react";

import profile from "../../assets/icons/stories/profile.png";
import { ReactComponent as RightArrow } from "../../assets/icons/notifications/right-arrow.svg";

export const RequestPanel = () => {
    return (
        <div
            style={{ borderBottom: "1px solid #dbdbdb" }}
            className="w-full"
        >
            <div className="flex flex-col gap-[15px] p-[15px]">
                <h1 className="text-[24] font-medium">Notifications</h1>
                <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-[10px] ">
                        <div className="relative w-[60px] h-[60px]">
                            <div className="absolute w-[44px] h-[44px] overflow-hidden rounded-full bg-text-white p-[2px] z-[5]">
                                <img
                                    src={profile}
                                    alt="top-image"
                                />
                            </div>
                            <div className="absolute w-[44px] h-[44px] overflow-hidden rounded-full bg-text-white p-[2px] z-[10] top-[15px] left-[15px]">
                                <img
                                    src={profile}
                                    alt="bottom-image"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-[14px] font-medium">Follow Requests</h4>
                            <div className="flex items-center">
                                <span>friend</span> <span>+ 36 others</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <span className="inline-block w-[8px] h-[8px] rounded-full overflow-hidden bg-sky-blue-2"></span>
                        <div className="w-[16px] h-[16px] rotate-[90deg]">
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
