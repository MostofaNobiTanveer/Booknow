import { useEffect } from 'react';
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors } from '../../store/actions/roomActions';
import Rating from '../miscellaneous/Rating';
import Head from 'next/head';
import Slider from 'react-slick';
import RoomFeatures from './RoomFeatures';

const RoomDetails = () => {
  const dispatch = useDispatch();
  const { room, error } = useSelector((state) => state.roomDetails);

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, [error, dispatch]);

  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    nextArrow: <BsChevronRight />,
    prevArrow: <BsChevronLeft />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>{room.name} | Booknow</title>
      </Head>
      <div className="relative max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-white absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <p className="text-sm text-gray-600 font-semibold tracking-wide uppercase">
              {/* {blog.createdAt?.slice(0, 10)} */}
              {room.createdAt?.slice(0, 10)}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-medium tracking-wide text-black">
              {room.name}
            </h3>
            <div className="flex flex-col items-start justify-between gap-2 mt-4">
              <h2 className="sm:text-base text-sm flex items-center gap-2 text-zinc-500 tracking-wide uppercase">
                <GoLocation className="text-sky-500 text-xl" /> {room.address}
              </h2>
              <h2 className="mb-1 text-base flex gap-2 items-center tracking-wide uppercase">
                <span className="flex items-center gap-1">
                  <Rating value={room.ratings} />
                </span>
                <span className="text-zinc-600 sm:text-base text-sm mt-1">
                  ({room.numOfReviews} Reviews)
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* image & patterns */}
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Slider {...settings}>
                    {room.images.map((image) => (
                      <Image
                        key={image.url}
                        className="rounded-lg shadow-lg object-cover object-center"
                        src={image.url}
                        alt={room.name}
                        width="1184"
                        height="1000"
                      />
                    ))}
                  </Slider>
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 space-y-8">
            {/* description */}
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h1 className="text-2xl font-medium mb-2">Description</h1>
              <p className="text-lg text-zinc-700">{room.description}</p>
            </div>
            {/* features */}
            <RoomFeatures room={room} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
