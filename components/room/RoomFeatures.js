import { FiUsers, FiCheck, FiWifi } from 'react-icons/fi';
import {
  MdOutlineBed,
  MdOutlineFreeBreakfast,
  MdAcUnit,
  MdOutlinePets,
  MdClose,
  MdOutlineCleaningServices,
} from 'react-icons/md';

const RoomFeatures = ({ room }) => {
  return (
    <div className="max-w-prose mx-auto lg:max-w-none">
      <h1 className="text-2xl font-medium mb-2">Features</h1>
      <div className="relative">
        {/* card background */}
        <div className="hidden absolute inset-0 pointer-events-none sm:block">
          <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg"></div>
        </div>

        <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
          <dl className="divide-y divide-gray-200">
            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <FiUsers className="text-base" />
                <span>Guests capacity</span>
              </dt>
              <dd className="text-center px-2">
                <span>
                  {room.guestCapacity < 10 && '0'}
                  {room.guestCapacity}
                </span>
              </dd>
            </div>

            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <MdOutlineBed className="text-lg" />
                <span>Beds</span>
              </dt>
              <dd className="text-center px-2">
                <span>
                  {room.numOfBeds < 10 && '0'}
                  {room.numOfBeds}
                </span>
              </dd>
            </div>

            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <MdOutlineFreeBreakfast className="text-lg" />
                <span>Breakfast</span>
              </dt>
              <dd className="text-center px-2">
                {room.breakfast === true ? (
                  <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  <MdClose className="mx-auto h-5 w-5 text-red-500" />
                )}
              </dd>
            </div>

            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <FiWifi className="text-lg" />
                <span>Internet</span>
              </dt>
              <dd className="text-center px-2">
                {room.internet === true ? (
                  <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  <MdClose className="mx-auto h-5 w-5 text-red-500" />
                )}
              </dd>
            </div>

            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <MdAcUnit className="text-lg" />
                <span>Air conditioned</span>
              </dt>
              <dd className="text-center px-2">
                {room.airConditioned === true ? (
                  <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  <MdClose className="mx-auto h-5 w-5 text-red-500" />
                )}
              </dd>
            </div>

            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <MdOutlinePets className="text-lg" />
                <span>Pets allowed</span>
              </dt>
              <dd className="text-center px-2">
                {room.petsAllowed === true ? (
                  <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  <MdClose className="mx-auto h-5 w-5 text-red-500" />
                )}
              </dd>
            </div>

            <div className="py-3 flex justify-between sm:grid sm:grid-cols-2">
              <dt className="font-medium text-zinc-700 sm:pr-4 flex items-center gap-2">
                <MdOutlineCleaningServices className="text-lg" />
                <span>Room cleaning</span>
              </dt>
              <dd className="text-center px-2">
                {room.roomCleaning === true ? (
                  <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                ) : (
                  <MdClose className="mx-auto h-5 w-5 text-red-500" />
                )}
              </dd>
            </div>
          </dl>
        </div>

        {/* card border */}
        <div className="hidden absolute inset-0 pointer-events-none sm:block">
          <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomFeatures;
