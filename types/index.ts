import { MouseEventHandler } from "react";

// Specifying structure of components and type
export interface CustomButtonProps {
    title: string;
    buttonStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}