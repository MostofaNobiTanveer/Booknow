import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { GiMoebiusTriangle } from 'react-icons/gi';
import { BsGrid, BsX, BsSliders } from 'react-icons/bs';
import { RiUserSmileLine } from 'react-icons/ri';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

// redux
import { useSelector, useDispatch } from 'react-redux';

// next auth
import { signOut } from 'next-auth/react';

// components
import { loadUser } from '../../store/actions/userActions';
import FilterOffcanvas from '../offcanvases/FilterOffcanvas';
import MobileMenuOffcanvas from '../offcanvases/MobileMenuOffcanvas';

const Header = ({
  isFilterOffcanvasOpen,
  closeFilterOffcanvas,
  openFilterOffcanvas,
}) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <FilterOffcanvas
        closeOffcanvas={closeFilterOffcanvas}
        isOffcanvasOpen={isFilterOffcanvasOpen}
      />
      <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
        {/* <!-- Logo area --> */}
        <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
          <Link href="/">
            <a className="flex items-center justify-center h-16 w-16 bg-black focus:outline-none md:w-20">
              <GiMoebiusTriangle className="w-7 h-7 text-white" />
            </a>
          </Link>
        </div>

        {/* <!-- Menu button area --> */}
        <div className="absolute inset-y-0 right-0 pr-4 flex gap-1 items-center md:hidden">
          <button
            onClick={openFilterOffcanvas}
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
            <div className="flex items-center space-x-4">
              <button
                onClick={openFilterOffcanvas}
                className="-mr-2 inline-flex items-center gap-2 justify-center py-2 px-3 rounded-md text-black hover:text-zinc-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-zinc-600"
              >
                <BsSliders />
                <span>Filters</span>
              </button>

              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 rounded-md p-1 px-2 flex items-center gap-1 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600"
                  onClick={toggleProfileMenu}
                >
                  <div className="relative h-9 w-9 rounded-full">
                    {user && user.avatar ? (
                      <Image
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full object-cover bg-gray-200">
                        <RiUserSmileLine className="w-full h-full object-cover p-2" />
                      </div>
                    )}
                  </div>
                  <p>{user && user.name.split(' ')[0]}</p>
                  <FiChevronDown />
                </button>
                <div
                  className={`${
                    isProfileMenuOpen
                      ? 'transform opacity-100 scale-100'
                      : 'transform opacity-0 scale-95 pointer-events-none'
                  } transition ease-out duration-100 origin-top-right absolute z-30 right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    {user ? (
                      <>
                        <Link href="/profile">
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My Profile
                          </a>
                        </Link>
                        <Link href="/profile/bookings">
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            My Bookings
                          </a>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex w-full"
                        >
                          Log Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/login">
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Login
                          </a>
                        </Link>
                        <Link href="/register">
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            register
                          </a>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide this `div` based on menu open/closed state --> */}

        <MobileMenuOffcanvas
          closeOffcanvas={closeMobileMenu}
          isOffcanvasOpen={isMobileMenuOpen}
        />
      </header>
    </>
  );
};

export default Header;
