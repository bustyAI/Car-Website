"use client";
import React from 'react'
import { SearchManufactuer } from '.';

import { useState } from 'react';

const SearchBar = () => {
    const [manufactuer, setManufactuer] = useState("");
    const handleSearch = () => {

    }
  return (
    <form className='seachbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufactuer 
            manufactuer={manufactuer}
            searchManufactuer={setManufactuer}
            />
        </div>
    </form>
  )
}

export default SearchBar