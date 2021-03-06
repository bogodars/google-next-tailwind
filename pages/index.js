import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10  p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          <Avatar url='https://image.flaticon.com/icons/png/512/523/523461.png' />
        </div>
      </header>

      {/* Body */}
      <form
        className='flex flex-col items-center mt-44 flex-grow w-4/5'
        action=''>
        <Image
          src='https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png'
          height={100}
          width={300}
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl  lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500 sm:flex-row sm:space-x-4' />
          <input
            ref={searchInputRef}
            type='text'
            className='focus:outline-none flex-grow'
          />
          <MicrophoneIcon className='h-10 w-10  p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
        </div>
        <div className='flex flex-col w-1/2 space-y-1 justify-center mt-8 sm:flex-row sm:space-x-4 items-center'>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
