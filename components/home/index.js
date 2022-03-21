import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { VscSearchStop } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors } from '../../store/actions/roomActions';
import RoomItem from '../room/RoomItem';
import Pagination from './Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);

  let { page = 1, location } = router.query;
  page = Number(page);

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, [error, dispatch]);

  const handlePagination = (pageNumber) => {
    if (location) {
      let url = window.location.search;

      url.includes('&page')
        ? (url = url.replace(/(page=)[^\&]+/, '$1' + pageNumber))
        : (url = url.concat(`&page=${pageNumber}`));

      router.push(url);
    } else {
      router.push(`/?page=${pageNumber}`);
      // window.location.href = `/?page=${pageNumber}`
    }
  };

  return (
    <div className="bg-zin-100">
      <div className="mx-auto py-8 px-4 sm:px-6 container lg:px-8 space-y-8">
        <div className="grid grid-cols-1 gap-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
          <div className="col-span-full sr-only"></div>
          {rooms && rooms.length === 0 ? (
            <div className="relative col-span-4 block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <VscSearchStop className="mx-auto h-12 w-12 text-red-500" />
              <span className="mt-2 block text-lg font-medium text-gray-900">
                No Rooms Found
              </span>
            </div>
          ) : (
            rooms.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
        {resPerPage < filteredRoomsCount && (
          <Pagination
            activePage={page}
            resPerPage={resPerPage}
            totalItemsCount={filteredRoomsCount}
            handlePagination={handlePagination}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
