import React from "react";

import imagePost from "../../assets/images/feed/unsplash_d2zvqp3fpro.png";

export const Media = () => {
    const type = "PHOTO";
    return (
        <div className="w-[100%]">
            <div>
                <img
                    src={imagePost}
                    alt="feed-photo"
                />
            </div>
        </div>
    );
};
