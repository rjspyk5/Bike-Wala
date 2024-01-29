import React from 'react';

export const Hero = props => {
  return (
    <div className='w-full '>
      <div className='hero-content flex-col justify-between lg:flex-row-reverse'>
        <img src={props.img} />
        <div className='*:text-white max-w-[456px]'>
          <p className='font-normal text-[14px]'>
            Computer-controlled digital transistorized with electronic advance
          </p>
          <h1 className='text-5xl font-bold'>{props.header}</h1>
          <p className='py-6 font-normal'>{props.content}</p>
          <button className='btn bg-[#E76F51] '>Purchage</button>
        </div>
      </div>
    </div>
  );
};
