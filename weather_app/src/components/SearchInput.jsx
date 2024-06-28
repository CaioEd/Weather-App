import React from 'react'


const SearchInput = ({location, setLocation, searchLocation}) => {
  return (
    <>
        <input type="search" className='searchInput' name="searchInput" id="searchInput" placeholder='Enter Location' value={location} onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}/>
    </>
  )
}

export default SearchInput