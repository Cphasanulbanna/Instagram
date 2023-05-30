import React, { useState } from "react";

//icons
import instagram from "../../assets/icons/auth/instagram.png";
import { Input } from "../reusable-components/Input";
import { PrimaryButton } from "../reusable-components/PrimaryButton";
import facebook from "../../assets/icons/auth/facebook.png";
import facebookWhite from "../../assets/icons/auth/facebook-white.png";
import { Link } from "react-router-dom";
import * as yup from "yup";

export const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        fullname: "",
        username: "",
        password: "",
    });

    console.log(formData);

    const [errors, setErrors] = useState({});

    const handleDataChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors({ ...errors, [name]: "" });
    };

    const emailREGEX =
        /^[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+([.-]?[a-z0-9]+)*.(com|in|io|org|net|info|gov)$/;

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .test((value) => emailREGEX.test(value))
            .required("This field is required"),
        username: yup.string().required("This field is required"),
        fullname: yup.string().required("This field is required"),
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

    const signup = async (e) => {
        e.preventDefault();
        await formSchema
            .validate(formData, { abortEarly: false })
            .then(() => {
                console.log("success");
                alert("success");
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

    const flexPrimary = "flex items-center";
    const flex = "flex flex-col justify-center";
    const greyLine = "h-[1.5px] flex flex-grow-[1] bg-light-grey";
    const greyBorder = "border-[1px] border-solid border-light-grey";
    return (
        <div className={`${flex} gap-[15px] max-w-[350px] w-full`}>
            <div className={`${flex} p-[40px] items-center ${greyBorder} `}>
                <div
                    className="logo h-[55px] w-[170px] cursor-pointer mb-[20px]"
                    style={{ backgroundImage: `url(${instagram})`, backgroundPositionY: "134px" }}
                ></div>
                <h1 className="text-[16px] text-text-grey font-medium text-center mb-[15px]">
                    Sign up to see photos and videos from your friends.
                </h1>
                <div
                    className={`w-full text-[14px] text-blue-text ${flexPrimary} gap-[15px] bg-sky-blue-2 text-text-white py-[7px] px-[16px] rounded-[6px] mb-[20px] cursor-pointer justify-center`}
                >
                    <div className="bg-[#fff] w-[16px] h-[16px]">
                        <img
                            src={facebookWhite}
                            alt="facebook"
                        />
                    </div>
                    <span className="text-[14px]">Log in with Facebook</span>
                </div>
                <div className={`${flexPrimary} mb-[15px] w-[100%]`}>
                    <div className={greyLine}></div>
                    <h5 className="text-text-grey text-[13px] mx-[10px]">OR</h5>
                    <div className={greyLine}></div>
                </div>
                <form
                    onSubmit={signup}
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
                        name="FullName"
                        type={"text"}
                        handleDataChange={handleDataChange}
                        formData={formData}
                        errors={errors.fullname}
                    />
                    <Input
                        name="Username"
                        type={"text"}
                        handleDataChange={handleDataChange}
                        formData={formData}
                        errors={errors.username}
                    />

                    <Input
                        formData={formData}
                        name="password"
                        errors={errors.password}
                        handleDataChange={handleDataChange}
                        type={"text"}
                    />
                    <p className="text-[12px] text-text-grey text-center ">
                        People who use our service may have uploaded your contact information to
                        Instagram.{" "}
                        <span className="cursor-pointer text-blue-text-2">Learn more</span>
                    </p>
                    <p className="text-[12px] text-text-grey text-center">
                        By signing up, you agree to our Terms,{" "}
                        <span className="cursor-pointer text-blue-text-2">Privacy Policy</span> and
                        <span className="cursor-pointer text-blue-text-2"> Cookies Policy</span>.
                    </p>
                    <PrimaryButton
                        title={"Sign Up"}
                        css={"mt-[-8px]"}
                    />
                </form>
            </div>
            <div>
                <h4
                    className={`${greyBorder} text-[13px] text-[#000] text-center px-[40px] py-[25px] `}
                >
                    Don't have an account?{" "}
                    <Link
                        to={"/accounts/login"}
                        className="text-sky-blue font-medium cursor-pointer text-[14px]"
                    >
                        Log In
                    </Link>
                </h4>
            </div>
        </div>
    );
};
