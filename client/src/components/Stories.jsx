import React from "react";

import profile from "../assets/icons/stories/profile.png";

const Stories = () => {
    const profiles = [
        { id: 1, image: profile, name: "person 1" },
        { id: 2, image: profile, name: "person abc 2" },
        { id: 3, image: profile, name: "person abcde 4" },
        { id: 4, image: profile, name: "person bcad" },
        { id: 5, image: profile, name: "person bggdg" },
        { id: 6, image: profile, name: "person new 444" },
    ];
    return (
        <div className="w-[100%] bordr-[1px] border-solid border-light-grey overflow-hidden rounded-[12px] p-[10px]">
            <div className="overflow-x-scroll flex gap-[20px] w-full">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="flex items-center flex-col gap-[8px] cursor-pointer min-w-[65px] overflow-hidden"
                    >
                        <div className="rounded-full overflow-hidden border-[2px] border-solid border-r-blue-text-2 p-[2px]">
                            <img
                                src={profile.image}
                                alt="profile"
                            />
                        </div>
                        <h4 className="text-[12px] text-center">{profile.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stories;
