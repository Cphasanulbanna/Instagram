import React from "react";
import { PostInfo } from "./PostInfo";
import { Media } from "./Media";

const Post = () => {
    return (
        <div className="w-[100%] border-[1px] border-solid border-light-grey rounded-t-[5px]">
            <PostInfo />
            <Media />
        </div>
    );
};

export default Post;
