import React, { useState } from 'react';

export const Navbar = () => {
  const [click, setclick] = useState(false);
  return (
    <>
      <header className='flex  justify-between flex-col md:flex-row  pt-10 sticky top-0 backdrop-blur-sm bg-transparent z-10'>
        <div className='logo flex items-center justify-between  space-x-2'>
          <div className='left-side flex '>
            <div className='block md:hidden cursor-pointer'>
              {click ? (
                <svg
                  onClick={() => setclick(pre => !pre)}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setclick(pre => !pre)}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
              )}
            </div>

            <h1 className='ml-4 md:ml-0 md:text-4xl text-2xl text-white'>
              Bike Wala
            </h1>
          </div>
          <button
            type='button'
            className='btn block md:hidden btn-outline   text-white'
          >
            Button
          </button>
        </div>

        <div className='item'>
          <ul
            className={`${
              click ? 'block' : 'hidden'
            } md:block list-none md:flex items-center md:space-x-9 `}
          >
            <li>
              <a href='' className='underline-none text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='' className='underline-none text-white'>
                Shop
              </a>
            </li>
            <li>
              <a href='' className='underline-none text-white'>
                News
              </a>
            </li>
            <li>
              <a href='' className='underline-none text-white'>
                Contact
              </a>
            </li>

            <button
              type='button'
              className='btn hidden md:block btn-outline   text-white'
            >
              Button
            </button>
          </ul>
        </div>
      </header>
    </>
  );
};
