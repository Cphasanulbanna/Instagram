import React, { useState } from "react";

//icons
import instagram from "../../assets/icons/auth/instagram.png";
import facebook from "../../assets/icons/auth/facebook.png";
import { Input } from "../reusable-components/Input";
import * as yup from "yup";
import { PrimaryButton } from "../reusable-components/PrimaryButton";
import { Link } from "react-router-dom";

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

    const flexPrimary = "flex items-center";
    const flex = "flex flex-col justify-center";
    const greyLine = "h-[1px] flex flex-grow-[1] bg-light-grey";
    const greyBorder = "border-[1px] border-solid border-light-grey";

    return (
        <div className={`${flex} gap-[15px] max-w-[350px] w-full`}>
            <div className={`${flex} p-[40px] pb-[0px] items-center ${greyBorder} `}>
                <div
                    className="logo h-[55px] w-[170px] cursor-pointer mb-[40px]"
                    style={{ backgroundImage: `url(${instagram})`, backgroundPositionY: "134px" }}
                ></div>
                <form
                    onSubmit={login}
                    className={`input-container w-full ${flex} gap-[20px]`}
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
                    <PrimaryButton
                        title={"Log In"}
                        css={"mt-[7px]"}
                    />
                </form>
                <div className={`${flexPrimary} my-[15px] w-[100%]`}>
                    <div className={greyLine}></div>
                    <h5 className="text-text-grey text-[13px] mx-[10px]">OR</h5>
                    <div className={greyLine}></div>
                </div>
                <div className={`${flexPrimary} gap-[10px]`}>
                    <div className="w-[16px] h-[16px]">
                        <img
                            src={facebook}
                            alt="facebook"
                        />
                    </div>
                    <span className="text-[14px] text-blue-text">Log in with Facebook</span>
                </div>
                <span className="text-text-grey text-[12px] my-[20px]">
                    Forgotten your password
                </span>
            </div>
            <div>
                <h4
                    className={`${greyBorder} text-[13px] text-[#000]  px-[40px] py-[25px] text-center
                 `}
                >
                    Don't have an account?{" "}
                    <Link
                        to={"/accounts/signup"}
                        className="text-sky-blue font-medium cursor-pointer text-[14px]"
                    >
                        Sign up
                    </Link>
                </h4>
            </div>
        </div>
    );
};
