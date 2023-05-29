import React from "react";

//icons
import instagram from "../../assets/icons/instagram.png";

export const Login = () => {
    const flex = "flex flex-col justify-center";
    return (
        <div className={`${flex} p-[40px]`}>
            <div
                style={{ backgroundImage: `url(${instagram})` }}
                className="logo h-[50px] w-[170px]"
            ></div>
        </div>
    );
};
