import { MouseEventHandler } from "react";

// Specifying structure of components and type
export interface CustomButtonProps {
   title: string;
   buttonStyles?: string;
   textStyles?: string;
   rightIcon?: string;
   isDisabled?: boolean
   handleClick?:
   MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit"
}

export interface CustomFilterProps {
   title: string;
   options: OptionProps[];
}

export interface OptionProps{
   title:string;
   value:string;
}

export interface SearchManufactuerProps {
   manufactuer: string;
   searchManufactuer: (manufactuer: string) => void;
}

export interface CarProps {
   city_mpg: number;
   class: string;
   combination_mpg: number;
   cylinders: number;
   displacement: number;
   drive: string;
   fuel_type: string;
   highway_mpg: number;
   make: string;
   model: string;
   transmission: string;
   year: number;
}

export interface FilterProps {
   manufactuer: string;
   year:  number;
   fuel: string;
   limit: number;
   model: string;
}

export interface ShowMoreProps {
   pageNumber: number;
   isNext:boolean;
}