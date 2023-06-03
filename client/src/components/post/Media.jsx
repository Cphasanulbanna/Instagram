import React from "react";

import ReactPlayer from "react-player";

export const Media = ({ media }) => {
    return (
        <div className="w-[100%]">
            {media?.type === "VIDEO" ? (
                <div className="w-[100%]">
                    <ReactPlayer
                        width={"100%"}
                        height={"500px"}
                        playing={true}
                        // thumbnail={thumbnail}
                        controls={true}
                        muted
                        autoPlay
                        loop={true}
                        url={media.video}
                    />
                </div>
            ) : (
                <div>
                    <img
                        src={media.image}
                        alt="feed-photo"
                    />
                </div>
            )}
        </div>
    );
};
