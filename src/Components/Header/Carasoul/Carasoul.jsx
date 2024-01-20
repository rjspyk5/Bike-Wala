import React from 'react';

import bike1 from '../../../assets/images/slider/bike1.png';
import bike2 from '../../../assets/images/slider/bike2.png';
import bike3 from '../../../assets/images/slider/bike3.png';
import bike4 from '../../../assets/images/slider/bike4.png';
import { Hero } from './Hero';

export const Carasoul = () => {
  return (
    <div className='carousel w-full bg-[#264653]'>
      {/* slider one */}
      <div id='slide1' className='carousel-item relative w-full'>
        <Hero
          img={bike1}
          content='lorem10
        '
          header='test'
        />

        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      {/* slider two*/}
      <div id='slide2' className='carousel-item relative w-full'>
        <Hero
          img={bike2}
          content='lorem10
        '
          header='test'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      {/* slider three */}
      <div id='slide3' className='carousel-item relative w-full'>
        <Hero
          img={bike3}
          content='lorem10
        '
          header='test'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      {/* slider four */}
      <div id='slide4' className='carousel-item relative w-full'>
        <Hero
          img={bike4}
          content='lorem10
        '
          header='test'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
