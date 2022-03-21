import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import NarrowSidebar from './NarrowSidebar';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contacts from './Contacts';

const Layout = ({ children, title = 'Booknow | Book your stay' }) => {
  return (
    <div className="h-screen hide-scrollbar overflow-hidden flex flex-col">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* toastify */}
      <ToastContainer position="bottom-right" />

      {/* <!-- Top nav--> */}
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Narrow sidebar */}
        <NarrowSidebar />

        {/* Main area */}
        <main className="w-full border-t border-gray-200">
          <section className="h-full w-full overflow-y-auto hide-scrollbar flex flex-col">
            <section className="flex-1">{children}</section>
            <Contacts />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Layout;
