import React from "react";
import Stories from "../components/Stories";
import Feed from "../components/Feed";

export const Home = () => {
    return (
        <section className="max-w-[470px] w-[100%] flex gap-[15px] min-h-full overflow-y-auto">
            <section className="flex flex-col gap-[15px] w-[100%]">
                <Stories />
                <Feed />
            </section>
        </section>
    );
};
