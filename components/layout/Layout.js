import React from 'react';
import Head from 'next/head';
import Header from './Header';
import NarrowSidebar from './NarrowSidebar';

const Layout = ({
  children,
  title = 'Booknow | Best Hotels for your Holiday',
}) => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <!-- Top nav--> */}
      <Header />

      <div className="min-h-0 flex-1 flex overflow-hidden">
        {/* Narrow sidebar */}
        <NarrowSidebar />

        {/* Main area */}
        <main className="w-full border-t border-gray-200">
          <section className="h-full w-full overflow-y-auto hide-scrollbar">{children}</section>
        </main>
      </div>
    </div>
  );
};

export default Layout;
