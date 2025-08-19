import React, {FC} from "react";
import cl from "./Toast.module.css";

interface ToastProps {
    text: string;
    state: string;
}

const Toast: FC<ToastProps> = ({ text, state }) => {
    return <div className={`${cl.wrap} ${cl[state]}`}>{text}</div>;
};

export default Toast;
