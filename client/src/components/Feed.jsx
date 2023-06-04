import React from "react";

import Post from "./post/Post";

import imagePost from "../assets/images/feed/unsplash_d2zvqp3fpro.png";

const Feed = () => {
    const video = "https://youtube.com/shorts/ZV1FLNxdp6E?feature=share";
    const medias = [
        { id: 1, type: "PHOTO", image: imagePost },
        { id: 2, type: "VIDEO", video: video },
        { id: 3, type: "PHOTO", image: imagePost },
    ];

    return (
        <div className="lg1:w-[70%] lg1:mx-auto flex flex-col gap-[25px]">
            {medias.map((media, index) => (
                <Post
                    key={index}
                    media={media}
                />
            ))}
        </div>
    );
};

export default Feed;
