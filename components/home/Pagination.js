import { useState } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const Pagination = ({
  activePage,
  resPerPage,
  totalItemsCount,
  handlePagination,
}) => {
  const [pagesCount, setPagesCount] = useState(
    Math.ceil(totalItemsCount / resPerPage)
  );
  const handlePrev = () => {
    if (activePage > 1) {
      handlePagination(activePage - 1);
    }
  };
  const handleNext = () => {
    if (activePage < pagesCount) {
      handlePagination(activePage + 1);
    }
  };

  const resFrom = activePage * resPerPage - resPerPage + 1;
  const resTo =
    activePage * resPerPage > totalItemsCount
      ? totalItemsCount
      : activePage * resPerPage;

  return (
    <div className="bg-white border shadow-md px-4 py-3 flex items-center justify-between rounded-md sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={handlePrev}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium text-lg text-black">
              {' '}
              {resFrom < 10 ? `0${resFrom}` : resFrom}
              {resTo > 1 && '-'}
              {resTo > 1 && (resTo < 10 ? `0${resTo}` : resTo)}{' '}
            </span>
            of
            <span className="font-medium text-lg text-black">
              {' '}
              {`${totalItemsCount < 10 && '0'}${totalItemsCount}`}{' '}
            </span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <button
              onClick={handlePrev}
              disabled={activePage === 1}
              className="relative disabled:cursor-not-allowed inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <BiChevronLeft className="h-5 w-5" />
            </button>
            {[...Array(pagesCount).keys()].map((page) => (
              <button
                key={page}
                disabled={activePage === page + 1 ? true : false}
                className={`${
                  activePage === page + 1 ? 'bg-gray-100' : 'bg-white'
                } inline-flex disabled:cursor-not-allowed items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 transition ease-in-out duration-150`}
                onClick={() => handlePagination(page + 1)}
              >
                {page + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={activePage === pagesCount}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <BiChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
