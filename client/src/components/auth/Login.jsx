import React, { useState } from "react";

//icons
import instagram from "../../assets/icons/instagram.png";
import { Input } from "../reusable-components/Input";
import * as yup from "yup";
import { PrimaryButton } from "../reusable-components/PrimaryButton";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleDataChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors({ ...errors, [name]: "" });
    };

    const formSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("This field is required"),
        password: yup
            .string()
            .test(
                "has-capital-letter",
                "Password must contain at least one capital letter",
                (value) => /[A-Z]/.test(value)
            )
            .test(
                "has-special-character",
                "Password must contain at least one special character",
                (value) => /[!@#$%^&*]/.test(value)
            )
            .min(6, "Password must be at least 6 characters")
            .required("This field is required"),
    });

    const login = async (e) => {
        e.preventDefault();
        await formSchema
            .validate(formData, { abortEarly: false })
            .then(() => {
                console.log("success");
            })
            .catch((error) => {
                console.log(error);
                const validationErrors = {};
                error.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
            });
    };

    console.log(formData);

    const flex = "flex flex-col justify-center";
    return (
        <div className={`${flex} p-[40px]`}>
            <div
                className="logo h-[55px] w-[170px] cursor-pointer"
                style={{ backgroundImage: `url(${instagram})`, backgroundPositionY: "134px" }}
            ></div>
            <form
                onSubmit={login}
                className="input-container"
            >
                <Input
                    formData={formData}
                    name="email"
                    errors={errors.email}
                    handleDataChange={handleDataChange}
                    type={"text"}
                />
                <Input
                    formData={formData}
                    name="password"
                    errors={errors.password}
                    handleDataChange={handleDataChange}
                    type={"text"}
                />
                <PrimaryButton title={"Log In"} />
            </form>
        </div>
    );
};
