import { MouseEventHandler } from "react";

// Specifying structure of components and type
export interface CustomButtonProps {
    title: string;
    buttonStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
 }

 export interface CustomFilterProps {
    title:string;
 }

 export interface SearchManufactuerProps {
    manufactuer:string;
    searchManufactuer:(manufactuer:string) => void;
 }
