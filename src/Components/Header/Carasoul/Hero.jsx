import React from 'react';

export const Hero = props => {
  return (
    <div className='w-full '>
      <div className='hero-content flex-col justify-around lg:flex-row-reverse'>
        <img src={props.img} />
        <div>
          <h1 className='text-5xl font-bold'>{props.header}</h1>
          <p className='py-6'>{props.content}</p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};
