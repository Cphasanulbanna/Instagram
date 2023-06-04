import React, { useRef } from "react";

import { SearchHistory } from "./SearchHistory";
import useOutsideClick from "../hooks/useOutsideClick";

export const SearchBar = ({ setSearchOPen, searchOpen, searchIconref }) => {
    const searchbarRef = useRef(null);

    useOutsideClick(searchbarRef, searchIconref, () => {
        setSearchOPen(false);
    });

    return (
        <div
            id="search"
            ref={searchbarRef}
            style={
                searchOpen
                    ? { left: "70px", transition: "all 0.5s ease-in-out", opacity: "1" }
                    : { transition: "all 0.5s ease-in-out", opacity: "0.3" }
            }
            className={`search-bar max-w-[399px] w-[100%] border-[1px] border-solid border-light-grey border-l-0 border-b-0 border-t-0 h-[100vh] rounded-[10px] overflow-hidden fixed z-[1] left-[-335px] bg-text-white`}
        >
            <div className="pb-[15px] pt-[20px] px-[15px] flex flex-col gap-[30px]">
                <h1 className="text-[22px] font-medium">Search</h1>
                <div className="relative h-[40px] rounded-[7px] overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[100%] h-[100%] px-[10px] text-[15px] bg-light-grey-2"
                    />
                    <div className="w-[15px] h-[15px] cursor-pointer absolute z-10 right-[12px] top-[50%]  translate-y-[-50%] rounded-full overflow-hidden p-[2px] bg-text-grey"></div>
                </div>
            </div>
            <div className="flex flex-col gap-[15px] p-[10px] overflow-y-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-[16px] font-medium">Recent</h2>
                    <button className="text-[14px] cursor-pointer font-medium text-sky-blue">
                        Clear All
                    </button>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <SearchHistory />
                    <SearchHistory />
                    <SearchHistory />
                </div>
            </div>
        </div>
    );
};
