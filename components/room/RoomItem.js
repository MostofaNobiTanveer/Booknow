import Image from 'next/image';
import Link from 'next/link';
import Rating from '../miscellaneous/Rating';

const RoomItem = ({ room }) => {
  return (
    <div className="bg-white rounded-md group">
      <div className="flex justify-center items-center leading-none">
        <div className="relative bg-white h-40 w-5/6 max-w-sm object-cover rounded-md shadow-2xl mt-6 transform -translate-y-10 group-hover:-translate-y-4 transition duration-300">
          <Image
            src={room.images[0].url}
            alt="pic"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="p-4 space-y-3">
        {/* name */}
        <Link href={`/rooms/${room._id}`}>
          <a className="block mb-2 text-lg font-medium hover:underline">
            {room.name}
          </a>
        </Link>

        {/* description */}
        <p className="text-sm text-zinc-600 font-medium">
          {room.description.substring(0, 100)}...
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-2 text-lg">
          <div className="flex items-center gap-0.5 text-lg">
            {<Rating value={room.ratings} />}
          </div>
          <span className="text-sm text-zinc-600 mt-1">
            ({room.numOfReviews} Reviews)
          </span>
        </div>

        {/* price */}
        <p className="pt-1 text-2xl text-zinc-700 font-medium">
          ${room.pricePerNight} /{' '}
          <span className="text-lg font-normal">night</span>
        </p>
      </div>
    </div>
  );
};

export default RoomItem;
