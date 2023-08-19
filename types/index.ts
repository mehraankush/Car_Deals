import { manufacturers } from './../constents/index';
import  {MouseEventHandler} from 'react'

export interface CustomButtom{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisable?:boolean;
}
export interface SearchManufacturerprops{
  manufacturer:string;
  setManufacturer:(manufacturers:string)=>void;
}

export interface CarProps {
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}

export interface FilterProps {
  manufacturer:string,
  year:number,
  fuel:string,
  limit:number,
  model:string,
}