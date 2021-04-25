import React from 'react';

const Avatar = ({ url, className }) => {
  return (
    <img
      className={`cursor-pointer rounded-full h-10 transition-150 transform hover:scale-110 ${className}`}
      loading='lazy'
      src={url}
      alt='profile pic'
    />
  );
};

export default Avatar;
