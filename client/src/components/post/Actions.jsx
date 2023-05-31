import React from "react";

import { ReactComponent as Like } from "../../assets/icons/posts/like.svg";
import { ReactComponent as LikeRed } from "../../assets/icons/posts/like-red.svg";
import { ReactComponent as Comment } from "../../assets/icons/posts/comment.svg";
import { ReactComponent as Share } from "../../assets/icons/posts/share.svg";
import { ReactComponent as Save } from "../../assets/icons/posts/save.svg";
import { ReactComponent as SaveBlack } from "../../assets/icons/posts/save-black.svg";

const Actions = () => {
    const commonStyles = "w-[24px] h-[24px] cursor-pointer hover:opacity-[0.7]";
    return (
        <div className="flex items-center justify-between p-[8px]">
            <div className="flex items-center gap-[12px]">
                <div className={commonStyles}>
                    <Like />
                </div>
                <div className={commonStyles}>
                    <Comment />
                </div>
                <div className={commonStyles}>
                    <Share />
                </div>
            </div>
            <div className={commonStyles}>
                <Save />
            </div>
        </div>
    );
};

export default Actions;
