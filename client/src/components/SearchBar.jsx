import React from "react";

export const SearchBar = () => {
    return (
        <div className="max-w-[400px] w-[100%] border-r-[1px] border-r-solid border-r-text-grey h-[100vh] rounded-[10px] overflow-hidden">
            <div className="pb-[15px] pt-[20px] flex flex-col gap-[30px]">
                <h1 className="text-[22px] font-medium">Search</h1>
                <div className="relative h-[40px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[100%] h-[100%] px-[10px] text-[15px] bg-text-grey"
                    />
                    <div className="w-[15px] h-[15px] cursor-pointer absolute z-10 right-[12px] top-[50%]  translate-y-[-50%] rounded-full overflow-hidden p-[2px] bg-text-grey"></div>
                </div>
            </div>
            <div className="flex flex-col gap-[15px] p-[10px] overflow-y-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-[18px] font-medium">Recent</h2>
                    <button className="text-[18px] cursor-pointer font-medium text-sky-blue">
                        Clear All
                    </button>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <History />
                    <History />
                    <History />
                </div>
            </div>
        </div>
    );
};
