import { XIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form
          action=''
          className='flex flex-grow px-6 py-3 ml-10 mr-5 border order-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            className='flex-grow w-full focus:outline-none'
            type='text'
            ref={searchInputRef}
          />
          <XIcon className='h-7 sm:mr-3  text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
          <button
            hidden
            type='submit'
            onClick={search}
            className='h-6 text-blue-500 hidden sm:inline-flex'></button>
        </form>
      </div>
    </header>
  );
};

export default header;
