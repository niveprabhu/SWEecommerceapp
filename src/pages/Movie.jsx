import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../assets/assets'

const Movie = () => {

  const[movies,setMovies] = useState(products);
  const[searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredMovies = products.filter(movie =>
      movie.Name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      movie.director.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div className='p-6 bg-gray-700'>
      <h2 className='text-2xl font-bold mb-4 text-slate-100'>Movies Collection</h2>
      {/*Search Bar*/}
      <div className='mb-4'>
        <input type='text' placeholder='Type Movie Name or Director' value={searchTerm} onChange={handleSearch}
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'/>
      </div>

      {/* Movie List Header */}
      <div className='hidden sm:flex bg-gray-700 rounded-md shadow-sm p-4 mb-2 text-lg font-semibold text-slate-100'>
        <div className='w-1/3'>Movie Name</div>
        <div className='w-1/4'>Release Date</div>
        <div className='w-1/4'>Director</div>
      </div>

      {/*List of movies*/}
      {movies.length > 0 ? (
        <ul className='space-y-2'>
          {movies.map(movie => (
            <li key={movie.id} className='bg-white rounded-md shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between'>
            <div className='w-full sm:w-1/3 mb-2 sm:mb-0'>
              <h3 className='text-lg font-semibold text-gray-700'>{movie.Name}</h3>
            </div>
            <div className='w-full sm:w-1/4 mb-2 sm:mb-0 text-xs text-gray-500'>
              {movie.releasedate}
            </div>
            <div className='w-full sm:w-1/4 mb-2 sm:mb-0 text-xs text-gray-500'>
              {movie.director}
            </div>
            <div className='w-full sm:w-1/6 flex justify-center'>
              <Link to={'/movie/${movie.id}'}>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-sm items-center">
                      Book Now
                  </button>
              </Link>
            </div>
          </li>
          ))}
        </ul>
      ):(<p className='text-gray-600'>No movies found.</p>)}
    </div>
  );
};

export default Movie