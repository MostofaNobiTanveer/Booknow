import { BsApp } from 'react-icons/bs';
import {
  FiUser,
  FiLogOut,
  FiSearch,
  FiUserPlus,
  FiLogIn,
} from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navlinks = [
  {
    href: '/',
    label: 'Home',
    icon: <BsApp />,
  },
  {
    href: '/rooms',
    label: 'Rooms',
    icon: <FiSearch />,
  },
];

const NarrowSidebar = () => {
  const { pathname } = useRouter();
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

        <Link href="/search">
          <a
            title="Search"
            className={`${
              pathname === '/search'
                ? 'bg-zinc-800 text-white'
                : 'hover:bg-zinc-800 hover:text-white text-zinc-500'
            } flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg`}
          >
            <FiSearch className="h-6 w-6" />
          </a>
        </Link>

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

        <button
          title="Logout"
          className="text-zinc-600 hover:bg-zinc-800 hover:text-white flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
        >
          <FiLogOut className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default NarrowSidebar;
