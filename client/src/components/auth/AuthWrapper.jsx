import React from "react";

//icons
import googlePlay from "../../assets/icons/auth/google-play.png";
import microsoft from "../../assets/icons/auth/microsoft.png";
import { Login } from "./Login";

import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";

const AuthWrapper = () => {
    const flex = "flex justify-center";
    const grey = "text-[var(--text-grey)]";

    const links = [
        { id: 1, link: "Meta", path: "/" },
        { id: 2, link: "About", path: "/" },
        { id: 3, link: "Blog", path: "/" },
        { id: 4, link: "Jobs", path: "/" },
        { id: 5, link: "Help", path: "/" },
        { id: 6, link: "Api", path: "/" },
        { id: 7, link: "Privacy", path: "/" },
        { id: 8, link: "Terms", path: "/" },
        { id: 9, link: "Top Accounts", path: "/" },
        { id: 10, link: "Location", path: "/" },
        { id: 11, link: "Instagram Lite", path: "/" },
        { id: 12, link: "Contact uploading and non-users", path: "/" },
        { id: 13, link: "Meta Verified", path: "/" },
    ];

    return (
        <section className="min-h-[100vh]">
            <section className={`w-[70%] mx-auto flex-col ${flex}  `}>
                <div
                    className={`icons-box ${flex} flex-col items-center gap-[10px] px-[30px] py-[10px]`}
                >
                    <Routes>
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/signup"
                            element={<Signup />}
                        />
                    </Routes>

                    <h5 className="text-[14px]">Get the app</h5>
                    <div className={`${flex} gap-[10px] items-center`}>
                        <div className="cursor-pointer h-[40px]">
                            <img
                                src={googlePlay}
                                alt="googleplay"
                            />
                        </div>
                        <div className="cursor-pointer h-[40px]">
                            <img
                                src={microsoft}
                                alt="microsoft"
                            />
                        </div>
                    </div>
                </div>
                <div className={`buttons flex-wrap items-center gap-[20px] mt-[100px] ${flex}`}>
                    {links?.map((link) => (
                        <span
                            className={`text-[12px] ${grey}`}
                            key={link.id}
                        >
                            {link.link}
                        </span>
                    ))}
                </div>
                <div className={`bottom ${flex} gap-[15px] mt-[20px]`}>
                    <div className={`${grey} text-[12px]`}>English (UK)^</div>
                    <p className={`${grey} text-[12px]`}>c 2023 Instagram from Meta</p>
                </div>
            </section>
        </section>
    );
};

export default AuthWrapper;
