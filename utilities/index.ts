import { CarProps } from "@/types";
import { FilterProps } from "@/types";

export async function getCars(filters: FilterProps) {
    const {manufactuer, year, model, limit, fuel} = filters;
    const headers = {
        'X-RapidAPI-Key': '23c3d9b9c1msh3fa6092fb9ba274p19c128jsn41b9e780d625',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    console.log("Error 0:" + manufactuer);
    console.log("Error 1:" + model);

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi`, {
        headers: headers
    });

    const results = await response.json();

    return results;
}

// Not Real Rates
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?:string) => {
    const url = new URL ('https://cdn.imagin.studio/car-image-api')
    
    const { make, year, model } = car
    
    url.searchParams.append('customer', '')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)
    
    return `${url}`
    }