import Head from 'next/head';
import Avatar from '../components/Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
export default function Home() {
  return (
    <div>
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
      <form action=''>
        <Image
          src='https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png'
          height={100}
          width={300}
        />

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg'>
          <SearchIcon className='h-5 mr-3 text-gray-500 ' />
          <input type='text' className='focus:outline-none bg-red-500' />
          <MicrophoneIcon className='h-10 w-10  p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
        </div>
      </form>
      {/* Footer */}
    </div>
  );
}
