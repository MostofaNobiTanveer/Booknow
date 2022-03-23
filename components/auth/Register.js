import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// react icons
import {
  BsChevronRight,
  BsX,
  BsEye,
  BsEyeSlash,
  BsEnvelope,
} from 'react-icons/bs';
import { GiMoebiusTriangle } from 'react-icons/gi';
import { RiUserSmileLine } from 'react-icons/ri';
import { FiLock, FiUserPlus, FiUser, FiLogIn } from 'react-icons/fi';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '../../store/actions/userActions';
import { toast } from 'react-toastify';

// cmponent
const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = user;
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const { success, error, loading } = useSelector((state) => state.auth);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (success) {
      toast.success('Account created successfully');
      router.push('/login');
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [success, error, dispatch, router]);

  const handleOnChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarPreview(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      avatar,
    };

    dispatch(registerUser(userData));
  };

  return (
    <section className="py-10 w-full grid place-items-center mx-auto px-3 md:px-6 text-black">
      <div className="relative max-w-xl flex flex-col w-full bg-white border rounded-xl mx-auto md:py-10 px-4 md:px-0 py-0">
        <div
          className={`mt-5 md:mt-0 w-full relative ${
            loading &&
            'opacity-40 select-none pointer-events-none animate-pulse'
          }`}
        >
          <div className="overflow-hidden h-full flex items-center">
            <div className="md:px-10 py-5 flex-1 grid grid-cols-6 gap-6">
              <h3 className="tracking-wide text-4xl">Register</h3>
              <form onSubmit={handleSubmit} className="col-span-6 space-y-6">
                {/* Full name */}
                <div>
                  <label htmlFor="name" className="text-sm flex items-center">
                    <FiUser className="w-4 h-4 mr-2" />
                    Full name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleOnChange}
                      autoComplete="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* email */}
                <div>
                  <label htmlFor="email" className="text-sm flex items-center">
                    <BsEnvelope className="w-4 h-4 mr-2" />
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="my-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleOnChange}
                      autoComplete="email"
                      type="email"
                      placeholder="example@mail.com"
                      required
                      className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* password input */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm flex items-center"
                    >
                      <FiLock className="w-4 h-4 mr-2" />
                      Password<span className="text-red-500">*</span>
                    </label>
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="cursor-pointer"
                    >
                      {showPass ? (
                        <BsEye className="mr-2 w-4 h-4" />
                      ) : (
                        <BsEyeSlash className="mr-2 w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <div className="my-1">
                    <input
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleOnChange}
                      type={showPass ? 'text' : 'password'}
                      placeholder="*********"
                      required
                      className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* picture */}
                <div>
                  <label className="text-sm flex items-center">
                    <RiUserSmileLine className="w-4 h-4 mr-2" />
                    Profile image<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-3 flex items-center w-full">
                    <div className="relative h-28 w-28 rounded-full border border-gray-300">
                      {avatarPreview ? (
                        <Image
                          src={avatarPreview}
                          alt="profile"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      ) : (
                        <svg
                          className="rounded-full text-gray-300 bg-gray-50"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      <label className="absolute -right-4 bottom-2 cursor-pointer ml-5 bg-white py-1.5 px-3 border border-gray-300 rounded-md shadow-sm text-xs leading-4 font-medium hover:bg-gray-100 focus:outline-none">
                        <input
                          id="avatar"
                          name="avatar"
                          type="file"
                          onChange={handleOnChange}
                          accept="image/*"
                          className="sr-only"
                        />
                        Select
                      </label>
                      <button
                        className="absolute top-2 -right-1"
                        type="button"
                        disabled={!avatarPreview}
                        onClick={() => {
                          setAvatarPreview('');
                          setAvatar('');
                        }}
                      >
                        <BsX className="h-5 w-5 box-content p-1 rounded-full bg-white border" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* register button */}
                <div>
                  <button
                    type="submit"
                    disabled={
                      !name || !email || !password || !avatar || loading
                    }
                    className="w-full disabled:opacity-90 disabled:cursor-not-allowed flex items-center gap-2 justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-black hover:bg-opacity-80 disabled:hover:bg-opacity-100 text-white tracking-wider uppercase focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black"
                  >
                    <span>{loading ? 'Processing...' : 'Register'}</span>
                    <FiUserPlus className="text-xl mb-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Logo */}
        <div className="absolute z-10 md:top-12 -top-6 md:-rotate-90  md:-left-16 left-4 flex gap-3 items-center">
          <h1 className="whitespace-nowrap text-sm p-3 flex gap-1.5 items-center justify-between rounded-lg border bg-white hover:bg-opacity-90 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-400">
            <GiMoebiusTriangle className="w-6 h-6" />
            <span>Book now</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Register;
