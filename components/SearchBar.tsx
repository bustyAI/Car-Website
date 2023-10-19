"use client";
import React from 'react'
import { SearchManufactuer } from '.';
import Image from 'next/image';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const [manufactuer, setManufactuer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufactuer === "" && model === "") {
      return(alert("Please fill in search bar"));
    }

    updateSearchParams(model.toLowerCase(), manufactuer.toLowerCase())

  }

  const updateSearchParams = (model: string, manufactuer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete('model');
    }

    if (manufactuer) {
      searchParams.set('manufactuer', manufactuer);
    } else {
      searchParams.delete('manufactuer');
    }
    const newPath = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPath);
  }



  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufactuer
          manufactuer={manufactuer}
          searchManufactuer={setManufactuer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className='searchbar__item'>
        <Image
          src="/model-icon.png"
          alt='model'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden'

      />
    </form>
  )
}

export default SearchBar