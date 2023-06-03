import { useEffect } from "react";
const useOutsideClick = (ref, callback) => {
    const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    };
    useEffect(() => {
        const handleMouseDown = (event) => handleClick(event);
        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [ref, callback]);
};
export default useOutsideClick;
