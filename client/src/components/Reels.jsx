import React from "react";

import ReactPlayer from "react-player";

import { ReactComponent as Like } from "../assets/icons/posts/like.svg";
import { ReactComponent as Comment } from "../assets/icons/posts/comment.svg";
import { ReactComponent as Share } from "../assets/icons/posts/share.svg";
import { ReactComponent as Save } from "../assets/icons/posts/save.svg";
import { ReactComponent as LikeRed } from "../assets/icons/posts/like-red.svg";
import { ReactComponent as SaveBlack } from "../assets/icons/posts/save-black.svg";
import { ReactComponent as Dots } from "../assets/icons/posts/3dots.svg";

export const Reels = () => {
    const videos = [
        "https://youtube.com/shorts/ZV1FLNxdp6E?feature=share",
        "https://youtube.com/shorts/WwcqvKS2NXs?feature=share",
        "https://youtube.com/shorts/ZV1FLNxdp6E?feature=share",
    ];

    return (
        <section className="flex  items-center">
            <div className="max-w-[450px] w-[100%] flex flex-col justify-center items-center gap-[20px] overflow-y-scroll">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="flex gap-[15px] w-[420px] height-[92vh] cursor-pointer rounded-[5px] overflow-hidden"
                    >
                        <div className="max-w-[380px] w-[100%] py-[10px] rounded-[5px] overflow-hidden h-[92vh] bg-[#111]">
                            <ReactPlayer
                                width={"100%"}
                                height={"100%"}
                                playing={true}
                                // thumbnail={thumbnail}
                                controls={true}
                                muted
                                autoPlay
                                loop={true}
                                url={video}
                            />
                        </div>
                        <div className="settings flex justify-end flex-col items-center gap-[15px] max-w-[40px] px-[7px]">
                            <div className="flex flex-col items-center gap-[3px] cursor-pointer">
                                <Like />
                            </div>
                            <div className="flex flex-col items-center gap-[3px] cursor-pointer">
                                <Comment />
                            </div>
                            <div>
                                <Share />
                            </div>
                            <div>
                                <Save />
                            </div>
                            <div>
                                <Dots />
                            </div>
                            <div className="bg-[#111] cursor-pointer rounded-[5px] overflow-hidden w-[24px] h-[24px]"></div>
                        </div>
                    </div>
                ))}

                {/* <div className="flex gap-[15px] w-[420px] height-[92vh] cursor-pointer rounded-[5px] overflow-hidden ">
                    <div className="max-w-[380px] w-[100%] py-[10px] rounded-[5px] overflow-hidden h-[92vh] bg-[#111]">
                        <ReactPlayer
                            width={"100%"}
                            height={"100%"}
                            playing={true}
                            // thumbnail={thumbnail}
                            controls={true}
                            muted
                            autoPlay
                            loop={true}
                            url="https://youtube.com/shorts/WwcqvKS2NXs?feature=share"
                        />
                    </div>
                    <div className="settings"></div>
                </div> */}
            </div>
        </section>
    );
};
