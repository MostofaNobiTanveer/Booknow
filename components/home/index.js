import React from 'react';
import { useSelector } from 'react-redux';
import RoomItem from '../room/RoomItem';

const Home = () => {
  const { rooms } = useSelector((state) => state.allRooms);

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 container lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full space-y-8">
        <div className="sr-only"></div>
        {rooms && rooms.length === 0
          ? null
          : rooms.map((room) => <RoomItem key={room._id} room={room} />)}
      </div>
    </div>
  );
};

export default Home;
