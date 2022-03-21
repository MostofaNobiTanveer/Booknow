import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdAlternateEmail, MdPhone } from 'react-icons/md';
import { FiLock, FiUserPlus, FiLogIn } from 'react-icons/fi';
import { BsEye, BsEyeSlash, BsEnvelope } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';

const Contacts = () => {
  const [formData, setFormData] = useState({});
  const [showPass, setShowPass] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-black flex-shrink-0 relative">
      <div className="mx-auto">
        <div className="contact-pattern bg-[#050505]">
          <div className="container mx-auto px-4 sm:px-6 py-8 lg:pt-6 lg:pb-0 lg:px-8 lg:grid lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3 text-5xl font-semibold text-white mt-auto lg:mb-10">
              Contact Us
            </div>
            <div className="flex justify-end lg:col-span-2">
              <div className="mt-8 xl:mt-0 w-full lg:max-w-lg bg-white pt-12 pb-24 px-6 lg:-mb-20 rounded-md">
                <form onSubmit={handleSubmit} className="col-span-6 space-y-6">
                  {/* Name */}
                  <div>
                    <div className="mt-2 border border-gray-300 dark:border-zinc-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 dark:focus-within:ring-white focus-within:ring-indigo-500">
                      <label htmlFor="name" className="block text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block bg-transparent w-full border-0 p-0 placeholder-gray-500 focus:ring-0 sm:text-sm text-gray-600 dark:text-zinc-300"
                        placeholder="your full name"
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div>
                    <div className="mt-2 border border-gray-300 dark:border-zinc-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 dark:focus-within:ring-white focus-within:ring-indigo-500">
                      <label htmlFor="email" className="block text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block bg-transparent w-full border-0 p-0 placeholder-gray-500 focus:ring-0 sm:text-sm text-gray-600 dark:text-zinc-300"
                        placeholder="your email address"
                      />
                    </div>
                  </div>
                  {/* message */}
                  <div>
                    <div className="mt-2 border border-gray-300 dark:border-zinc-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 dark:focus-within:ring-white focus-within:ring-indigo-500">
                      <label htmlFor="briefAbout" className="block text-sm">
                        About yourself
                      </label>
                      <textarea
                        style={{ resize: 'none' }}
                        type="text"
                        rows={3}
                        name="briefAbout"
                        id="briefAbout"
                        className="block bg-transparent w-full border-0 p-0 placeholder-gray-500 focus:ring-0 sm:text-sm text-gray-600 dark:text-zinc-300"
                        placeholder="A little about yourself"
                      />
                    </div>
                  </div>
                  {/* login button */}
                  <div>
                    <button
                      type="submit"
                      disabled={
                        !formData?.email || formData?.password?.length < 6
                      }
                      className="w-full disabled:opacity-90 disabled:cursor-not-allowed flex items-center gap-2 justify-center py-2 px-4 border border-transparent rounded-md text-sm font-normal bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                      <span>Send Message</span>
                      <AiOutlineMinus className="text-xl" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 container mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 items-center">
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Analytics
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Commerce
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Insights
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 lg:mt-0 col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Guides
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1 items-center justify-between flex space-x-6 max-w-lg">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <FaWhatsapp className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <MdAlternateEmail className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <MdPhone className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-300 lg:hidden xl:flex text-xl flex items-center gap-2">
                <AiOutlineMinus />
                follow us
              </p>
            </div>
          </div>
          {/* <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Booknow, Inc. All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
