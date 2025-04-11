import React, { useState, useRef, useEffect } from 'react';
import { assets, icons } from '../assets/assets'; //  Assuming icons are in assets.js
import { products } from '../assets/assets'; //  **IMPORT products from assets.js**
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const location = useLocation();

  let sidebarWidthClass = 'w-0';
  if (visible) {
    sidebarWidthClass = 'w-full';
  }

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      searchInputRef.current && searchInputRef.current.focus();
    } else {
      clearSuggestions();
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredSuggestions = value
      ? products.filter(
          (movie) =>
            movie.Name.toLowerCase().includes(value.toLowerCase()) ||
            movie.director.toLowerCase().includes(value.toLowerCase()) ||
            movie.category.toLowerCase().includes(value.toLowerCase()) ||
            movie.main_actor.toLowerCase().includes(value.toLowerCase())
        )
      : [];
    setSuggestions(filteredSuggestions);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  useEffect(() => {
    clearSuggestions();
  }, [location.pathname]);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt='' />
      <ul className='hidden sm:flex gap-5 text-sm text-slate-100'>
        <NavLink to='/' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/movie' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>Movies Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 text-gray-700'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={toggleSearch} src={icons.search_icon} className='w-5 cursor-pointer' alt='' />

        {isSearchVisible && (
          <form onSubmit={handleSearchSubmit} className='ml-4 relative'>
            <input
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={handleSearch}
              ref={searchInputRef}
              onBlur={clearSuggestions}
              className='px-4 py-2 rounded-full text-sm focus:outline-none focus:ring focus:ring-blue-300'
            />
            <button type='submit' className='hidden'>
              Submit
            </button>

            {suggestions.length > 0 && (
              <ul className='absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10 w-full'>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id || suggestion.Name}
                    onClick={() => {
                      setSearchTerm(suggestion.Name);
                      setIsSearchVisible(false);
                      navigate(`/selectseat/${suggestion.id}}`); // navigate to selectseat
                    }}
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                  >
                    {suggestion.Name} ({suggestion.director})
                  </li>
                ))}
              </ul>
            )}
          </form>
        )}

        <div className='group relative'>
          <img src={icons.profile_icon} className='w-5 cursor-pointer' alt='' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-700'>
              <NavLink to='/myprofile'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
              </NavLink>
              <NavLink to='/orders'>
                <p className='cursor-pointer hover:text-black'>Orders</p>
              </NavLink>
              <NavLink to='/login'>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </NavLink>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={icons.cart_icon} className='w-10 w-min-10' alt='' />
          <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>
        <img onClick={() => setVisible(true)} src={icons.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='' />
      </div>
      {/*sidebar menu for small screen*/}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${sidebarWidthClass}`}>
        {/*<div className={['absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}']}>*/}
        <div className='flex flex-col text-gray-700 '>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={icons.dropdown_icon} alt='' className='h-4 rotate-180' />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py pl-6 border' to='/'>
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py pl-6 border' to='/movie'>
            Movies Collection
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py pl-6 border' to='/about'>
            About
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py pl-6 border' to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;