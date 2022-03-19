import React, { useState } from 'react';
import { GiMoebiusTriangle } from 'react-icons/gi';
import { BsGrid, BsX, BsSliders } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  return (
    <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
      {/* <!-- Logo area --> */}
      <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
        <a
          href="#"
          className="flex items-center justify-center h-16 w-16 bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
        >
          <GiMoebiusTriangle className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* <!-- Menu button area --> */}
      <div className="absolute inset-y-0 right-0 pr-4 flex gap-1 items-center md:hidden">
        <button
          type="button"
          className="inline-flex items-center gap-2 justify-center p-2 rounded-md text-black hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-zinc-600"
        >
          <BsSliders className="block h-5 w-5" />
        </button>
        {/* <!-- Mobile menu button --> */}
        <button
          onClick={openMobileMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-zinc-600"
        >
          <BsGrid className="block h-5 w-5" />
        </button>
      </div>

      {/* <!-- Desktop nav area --> */}
      <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search"
              className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
              <FiSearch className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
          {/* <nav aria-label="Global" className="flex space-x-10">
            <a href="#" className="text-sm font-medium text-gray-900">
              Inboxes
            </a>
            <a href="#" className="text-sm font-medium text-gray-900">
              Reporting
            </a>
            <a href="#" className="text-sm font-medium text-gray-900">
              Settings
            </a>
          </nav> */}
          <div className="flex items-center space-x-6">
            <button
              onClick={openMobileMenu}
              type="button"
              className="-mr-2 inline-flex items-center gap-2 justify-center py-2 px-3 rounded-md text-black hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-zinc-600"
            >
              <BsSliders />
              <span>Filters</span>
            </button>
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                onClick={toggleProfileMenu}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
              <div
                className={`${
                  isProfileMenuOpen
                    ? 'transform opacity-100 scale-100'
                    : 'transform opacity-0 scale-95 pointer-events-none'
                } transition ease-out duration-100 origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide this `div` based on menu open/closed state --> */}

      <div
        className={`${
          !isMobileMenuOpen && 'pointer-events-none'
        } fixed inset-0 z-40 md:hidden`}
      >
        <div
          onClick={closeMobileMenu}
          className={`${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          } transition-opacity ease-linear duration-300 hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75`}
        ></div>
        <nav
          className={`${
            isMobileMenuOpen
              ? 'transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
              : 'transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
          } transition ease-out duration-150 sm:ease-in-out sm:duration-300 fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg`}
        >
          <div className="h-16 flex items-center justify-between px-4 sm:px-6">
            <a href="#">
              <GiMoebiusTriangle className="w-8 h-8 text-black" />
            </a>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-zinc-600"
            >
              <BsX className="block h-7 w-7" />
            </button>
          </div>
          <div className="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
            <div className="relative text-gray-400 focus-within:text-gray-500">
              <label htmlFor="search" className="sr-only">
                Search all inboxes
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search location"
                className="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
              />
              <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                <FiSearch className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
            <a
              href="#"
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Inboxes
            </a>

            <a
              href="#"
              className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
            >
              Technical Support
            </a>

            <a
              href="#"
              className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
            >
              Sales
            </a>

            <a
              href="#"
              className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
            >
              General
            </a>

            <a
              href="#"
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Reporting
            </a>

            <a
              href="#"
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Settings
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3 min-w-0 flex-1">
                <div className="text-base font-medium text-gray-800 truncate">
                  Whitney Francis
                </div>
                <div className="text-sm font-medium text-gray-500 truncate">
                  whitneyfrancis@example.com
                </div>
              </div>
            </div>
            <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Your Profile
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Sign out
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
