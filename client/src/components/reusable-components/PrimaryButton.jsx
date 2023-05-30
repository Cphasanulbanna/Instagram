import React from "react";

export const PrimaryButton = ({ title }) => {
    return (
        <button
            className="w-[100%] rounded-[8px] text-center cursor-pointer text-[14px] py-[7px] px-[16px] opacity-[0.7] overflow-hidden font-medium text-[var(--text-white)] bg-[var(--sky-blue)]"
            type="submit"
        >
            {title}
        </button>
    );
};
