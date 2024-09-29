import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex dark:bg-gray-700 bg-amber-200 p-4 lg:text-lg justify-center gap-4'>
      <NavbarItem title ='Trending'
      param ='fetchTrending'
      />
      <NavbarItem title ='Top Rated'
      param ='fetchTopRated'/>
    </div>
  )
}

export default Navbar