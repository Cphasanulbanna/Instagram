import React from "react";

import Post from "./post/Post";

import imagePost from "../assets/images/feed/unsplash_d2zvqp3fpro.png";
import ReactPlayer from "react-player";

const Feed = () => {
    const video = "https://youtube.com/shorts/ZV1FLNxdp6E?feature=share";
    const medias = [
        { id: 1, type: "PHOTO", image: imagePost },
        { id: 2, type: "VIDEO", video: video },
        { id: 3, type: "PHOTO", image: imagePost },
    ];

    return (
        <>
            {medias.map((media) => (
                <Post media={media} />
            ))}
        </>
    );
};

export default Feed;
