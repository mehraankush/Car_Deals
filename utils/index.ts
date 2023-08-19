import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps){
    const { manufacturer, year, fuel, model, limit} = filters;
    const headers = {
            'X-RapidAPI-Key': '4b89590c4bmsh96e3d68c9aafa06p10a4c5jsn5ac969d0c19a',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers:headers, 
    });

    const result = response.json();
    return result;

}

export const calculateCarRent = (city_mpg:number,year:number)=>{
    const basePricePerDay = 50 // in dollers
    const mileageFactor  = 0.1; // per year of vehicle age
    const ageFactor  = 0.05; // per year of vehicle age
     
    // Calculate additional rate based on the mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear()-year)*ageFactor;

    // calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + ageRate+ mileageRate

    return rentalRatePerDay.toFixed(0);
}   


export const generateCarImage = (car:CarProps,angle?:string) =>{


}

export const updateSearcchParams = (type:string,value:string) =>{
    const searhParams = new URLSearchParams(window.location.search)

    searhParams.set(type,value)

    const newPathName = `${window.location.pathname}?${searhParams.toString()}`
   return newPathName;
}