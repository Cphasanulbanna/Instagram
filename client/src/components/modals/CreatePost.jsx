import React, { useRef } from "react";

import { ReactComponent as AddPost } from "../../assets/icons/add-posts/add-post.svg";
import { PrimaryButton } from "../reusable-components/PrimaryButton";
import ModalWrapper from "../reusable-components/ModalWrapper";
import { useDispatch } from "react-redux";
import { showPanel } from "../../redux/modalSlice";

export const CreatePost = ({ setSelectedMenu }) => {
    const handlePostUpload = () => {};

    const dispatch = useDispatch();

    const hideModal = () => {
        setSelectedMenu("Home");
        dispatch(showPanel(""));
    };

    return (
        <ModalWrapper hideModal={hideModal}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="bg-[#fff] rounded-[8px] overflow-hidden justify-center relative
             flex items-center flex-col h-[70%] w-[40%]"
            >
                <div
                    style={{ borderBottom: "1px solid #dfdfdf" }}
                    className="text-center text-[16px] font-medium py-[5px] absolute top-[8px] w-[100%]"
                >
                    Create new post
                </div>
                <div className="flex flex-col items-center justify-center gap-[15px]">
                    <div className="w-[100px] cursor-pointer">
                        <AddPost />
                    </div>
                    <h4 className="text-[20px] text-center">Drag photos and videos here</h4>
                    <PrimaryButton
                        title={"Select from computer"}
                        onClickFunction={handlePostUpload}
                    />
                </div>
            </div>
        </ModalWrapper>
    );
};
