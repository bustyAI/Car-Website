export async function getCars() {
    const headers = {
		'X-RapidAPI-Key': '23c3d9b9c1msh3fa6092fb9ba274p19c128jsn41b9e780d625',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers
} );

    const results = await response.json();

    return results;
}
