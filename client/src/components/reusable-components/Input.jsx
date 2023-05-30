import React from "react";

export const Input = ({ formData, handleDataChange, type, name, errors }) => {
    const greyBorder = "border-[1px] border-solid border-light-grey";
    return (
        <div className={`${greyBorder} p-[7px] `}>
            <input
                className={`text-[13px] text-black`}
                id={name}
                name={name}
                value={formData?.name}
                type={type}
                onChange={handleDataChange}
                placeholder={name.split(/(?=[A-Z])/).join(" ")}
            />
            <span className="error-message">{errors}</span>
        </div>
    );
};
