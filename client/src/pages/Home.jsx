import React from "react";
import Stories from "../components/Stories";
import Feed from "../components/Feed";
import { Suggestions } from "../components/suggestion/Suggestions";

export const Home = () => {
    return (
        <section
            className=" w-[100%] justify-center
         flex gap-[15px] min-h-full overflow-y-auto relative lg1:w-[100%] lg1:m-[0 auto]"
        >
            <section className="max-w-[470px] lg1:max-w-[unset] flex justify-center flex-col gap-[15px] w-[100%]">
                <Stories />
                <Feed />
            </section>
            <div className="lg1:hidden">
                <Suggestions />
            </div>
        </section>
    );
};
