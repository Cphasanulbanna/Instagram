import React from "react";

export const Input = ({ formData, handleDataChange, type, name, errors }) => {
    return (
        <div>
            <input
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
