import Link from 'next/link';

// react icons
import { BsApp, BsCalendarCheck } from 'react-icons/bs';
import {
  FiUser,
  FiLogOut,
  FiSearch,
  FiUserPlus,
  FiLogIn,
} from 'react-icons/fi';

// redux
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// next auth
import { signOut } from 'next-auth/react';

const NarrowSidebar = ({ openFilterOffcanvas }) => {
  const { user, loading } = useSelector((state) => state.auth);
  const { pathname } = useRouter();

  const handleLogout = () => {
    signOut();
  };
  return (
    <nav className="hidden md:block md:flex-shrink-0 md:bg-black md:overflow-y-auto hide-scrollbar">
      <div className="relative w-20 flex flex-col p-3 space-y-3">
        <Link href="/">
          <a
            title="Home"
            className={`${
              pathname === '/'
                ? 'bg-zinc-800 text-white'
                : 'hover:bg-zinc-800 hover:text-white text-zinc-500'
            } flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`}
          >
            <BsApp className="h-6 w-6" />
          </a>
        </Link>

        <button
          onClick={openFilterOffcanvas}
          title="Search"
          className="hover:bg-zinc-800 hover:text-white text-zinc-500 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
        >
          <FiSearch className="h-6 w-6" />
        </button>
        {!user ? (
          <>
            <Link href="/login">
              <a
                title="Login"
                className={`${
                  pathname === '/login'
                    ? 'bg-zinc-800 text-white'
                    : 'hover:bg-zinc-800 hover:text-white text-zinc-500'
                } flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`}
              >
                <FiLogIn className="h-6 w-6" />
              </a>
            </Link>

            <Link href="/register">
              <a
                title="Register"
                className={`${
                  pathname === '/register'
                    ? 'bg-zinc-800 text-white'
                    : 'hover:bg-zinc-800 hover:text-white text-zinc-500'
                } flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`}
              >
                <FiUserPlus className="h-6 w-6" />
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile">
              <a
                title="Profile"
                className={`${
                  pathname === '/profile'
                    ? 'bg-zinc-800 text-white'
                    : 'hover:bg-zinc-800 hover:text-white text-zinc-500'
                } flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`}
              >
                <FiUser className="h-6 w-6" />
              </a>
            </Link>

            <Link href="/profile/bookings">
              <a
                title="My Bookings"
                className={`${
                  pathname === '/profile'
                    ? 'bg-zinc-800 text-white'
                    : 'hover:bg-zinc-800 hover:text-white text-zinc-500'
                } flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`}
              >
                <BsCalendarCheck className="h-6 w-6" />
              </a>
            </Link>

            <button
              onClick={handleLogout}
              title="Logout"
              className="text-zinc-600 hover:bg-zinc-800 hover:text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
            >
              <FiLogOut className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NarrowSidebar;
