import React from "react";
import { PostInfo } from "./PostInfo";
import { Media } from "./Media";
import Actions from "./Actions";
import { Interactions } from "./Interactions";

const Post = ({ media }) => {
    return (
        <div className="w-[100%] border-[1px] border-solid border-light-grey rounded-t-[5px]">
            <PostInfo />
            <Media media={media} />
            <Actions />
            <Interactions />
        </div>
    );
};

export default Post;
