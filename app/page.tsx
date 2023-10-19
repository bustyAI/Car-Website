import { Hero, CustomFilter, SearchBar, CarCard, ShowMore } from '@/components'
import { getCars } from '@/utilities'
import { FilterProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';


// passing search parameters to url
export default async function Home({searchParams}) {
  const cars = await getCars({
    manufactuer:searchParams.manufactuer || "",
    year: searchParams.year || 2021,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const noData = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Find Your Ride</h1>
          <p>Browse our Selection of Cars</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!noData ? (
          <section>
            <div className='home__cars-wrapper'>
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
            pageNumber ={(searchParams.pageNumber || 10) / 10}
            isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>No cars ):</h2>
            <p>{cars?.message}</p>
          </div>
        )}



      </div>
    </main>
  )
}
