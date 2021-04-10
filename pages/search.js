import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';

const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* <SearchComponent />  */}
    </div>
  );
};

export default Search;
