import { Hero, CustomFilter, SearchBar } from '@/components'

export default function Home() {
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
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
      </div>
     </div>
    </main>
  )
}
