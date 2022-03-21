import { GiMoebiusTriangle } from 'react-icons/gi';
import { BsX } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/router';

const FilterOffcanvas = ({ isOffcanvasOpen, closeOffcanvas }) => {
  const router = useRouter();
  const [filterData, setFilterData] = useState({
    location: '',
    category: '',
    guests: '',
  });

  const { location, category, guests } = filterData;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() || category.trim() || guests.trim()) {
      router.push(
        `/?location=${location}&guests=${guests}&category=${category}`
      );
    }
    console.log(filterData);
    setFilterData({
      location: '',
      category: '',
      guests: '',
    });
    closeOffcanvas();
  };
  return (
    <div
      className={`${
        !isOffcanvasOpen && 'pointer-events-none'
      } fixed inset-0 overflow-hidden hide-scrollbar z-50`}
    >
      <div className="absolute inset-0 overflow-hidden hide-scrollbar">
        <div
          onClick={closeOffcanvas}
          className={`${
            isOffcanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } fixed inset-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 transition-opacity`}
        ></div>

        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div
            className={`${
              isOffcanvasOpen
                ? 'transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100'
                : 'transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100'
            } transition ease-out sm:ease-in-out duration-300 fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg`}
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="location" className="block">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleOnChange}
                    placeholder="Search location"
                    className="mt-1 block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                  />
                  <div className="absolute text-gray-500 inset-y-0 top-6 flex items-center justify-center pl-3">
                    <FiSearch className="h-5 w-5" />
                  </div>
                </div>
                {/* room type */}
                <div>
                  <label htmlFor="category" className="block">
                    Room type
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={handleOnChange}
                    name="category"
                    className="mt-1 block w-full border-gray-300 rounded-md placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                  >
                    {['Single', 'King', 'Twins'].map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Guest */}
                <div>
                  <label htmlFor="guests" className="block">
                    No. of guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={guests}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                  >
                    {[...Array(6).keys()].map((category, index) => (
                      <option key={index} value={category + 1}>
                        {category + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={
                      !filterData.location &&
                      !filterData.category &&
                      !filterData.guests
                    }
                    className="mt-4 font-medium text-sm tracking-wider w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm rounded-md text-white bg-black disabled:cursor-not-allowed disabled:hover:bg-opacity-100 hover:bg-opacity-80 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOffcanvas;
