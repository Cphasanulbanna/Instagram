import React from "react";
import Stories from "../components/Stories";
import Feed from "../components/Feed";
import { Suggestions } from "../components/suggestion/Suggestions";

export const Home = () => {
    return (
        <section className=" w-[100%] justify-between flex gap-[15px] min-h-full overflow-y-auto">
            <section className="max-w-[470px] flex flex-col gap-[15px] w-[100%]">
                <Stories />
                <Feed />
            </section>
            <Suggestions />
        </section>
    );
};
