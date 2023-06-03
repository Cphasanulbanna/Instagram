import React from "react";

import { ReactComponent as SettingsIcon } from "../../assets/icons/settings/settings.svg";
import { ReactComponent as Activity } from "../../assets/icons/settings/activity.svg";
import { ReactComponent as Save } from "../../assets/icons/posts/save.svg";
import { ReactComponent as Theme } from "../../assets/icons/settings/theme.svg";
import { ReactComponent as Report } from "../../assets/icons/settings/report.svg";

export const Settings = () => {
    const data = [
        { id: 1, title: "Settings", icon: <SettingsIcon /> },
        { id: 2, title: "Your Activity", icon: <Activity /> },
        { id: 3, title: "Saved", icon: <Save /> },
        { id: 4, title: "Switch Appearance", icon: <Theme /> },
        { id: 5, title: "Report a problem", icon: <Report /> },
        { id: 6, title: "Switch accounts" },
        { id: 7, title: "Log out" },
    ];
    return (
        <ul className="w-[240px] flex flex-col rounded-[6px] overflow-hidden bg-[#fff] z-[200] fixed bottom-[60px] left-[10px] shadow-md">
            {data.map((item) => (
                <li
                    style={{
                        borderBottom: "1px solid #dfdfdf",
                    }}
                    key={item.id}
                    className="flex items-center justify-between py-[8px] px-[16px] cursor-pointer hover:bg-light-grey"
                >
                    <h3 className="text-[16px]">{item.title}</h3>
                    <div>{item.icon}</div>
                </li>
            ))}
        </ul>
    );
};
