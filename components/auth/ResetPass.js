import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// react toastify
// import { toast } from 'react-toastify';

// react icons
import { BsChevronRight, BsCursor, BsEnvelope } from 'react-icons/bs';
import { FiUserPlus, FiLogIn } from 'react-icons/fi';
import { GiMoebiusTriangle } from 'react-icons/gi';

// cmponent
const ResetPass = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // signinUser(formData.email, formData.password, state, navigate);
  };

  return (
    <section className="py-16 w-full grid place-items-center mx-auto px-3 md:px-6 text-black">
      <div className="relative max-w-xl flex flex-col w-full bg-white border rounded-xl mx-auto md:py-10 px-4 md:px-0 py-0">
        <div className="mt-5 md:mt-0 w-full relative">
          <div className="overflow-hidden h-full flex items-center">
            <div className="md:px-10 py-5 flex-1 grid grid-cols-6 gap-6">
              <h3 className="tracking-wide text-3xl md:text-4xl">Reset <br /> Password</h3>
              <form onSubmit={handleSubmit} className="col-span-6 space-y-4">
                {/* email */}
                <div>
                  <label htmlFor="email" className="text-md flex items-center">
                    <BsEnvelope className="w-4 h-4 mr-2" />
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      onChange={handleOnChange}
                      autoComplete="email"
                      type="email"
                      placeholder="example@mail.com"
                      required
                      className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
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
                    className="w-full disabled:opacity-90 disabled:cursor-not-allowed flex items-center gap-2 justify-center py-2 px-4 border border-transparent rounded-md text-sm font-normal bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    <span>Send</span>
                    <BsCursor className="text-xl" />
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

export default ResetPass;
