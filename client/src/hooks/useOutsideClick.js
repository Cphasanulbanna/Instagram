import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPanel } from "../redux/modalSlice";

export const useOutsideClick = (modalRef, setState) => {
    const SHOW_PANEL = useSelector((state) => state.modal.showPanel);
    const dispatch = useDispatch();
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            SHOW_PANEL !== "" && dispatch(showPanel(""));
            // setState("Home");
        }
    };

    useEffect(() => {
        const handleDocumentClick = (event) => {
            handleClickOutside(event);
        };

        document.addEventListener("mousedown", handleDocumentClick);

        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, [modalRef]);
};
