import { GiMoebiusTriangle } from 'react-icons/gi';
import { BsX } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const MobileMenuOffcanvas = ({ isOffcanvasOpen, closeOffcanvas }) => {
  return (
    <div
      className={`${
        !isOffcanvasOpen && 'pointer-events-none'
      } fixed inset-0 z-40 md:hidden`}
    >
      <div
        onClick={closeOffcanvas}
        className={`${
          isOffcanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } fixed inset-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 transition-opacity`}
      ></div>
      <nav
        className={`${
          isOffcanvasOpen
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
            onClick={closeOffcanvas}
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
  );
};

export default MobileMenuOffcanvas;
