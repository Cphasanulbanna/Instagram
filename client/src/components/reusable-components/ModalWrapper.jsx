import React from "react";

const ModalWrapper = ({ children, hideModal }) => {
    return (
        <section
            onClick={hideModal}
            className="w-[100%] h-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.1)] fixed inset-0 z-[200]"
        >
            {children}
        </section>
    );
};

export default ModalWrapper;
