import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Carasoul } from './Carasoul/Carasoul';

export const Header = () => {
  return (
    <div className='bg-[#264653] md:px-32 px-4'>
      <Navbar></Navbar>
      <Carasoul></Carasoul>
    </div>
  );
};
