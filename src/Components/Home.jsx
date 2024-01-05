import React from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';
import NavDesk from './NavDesk';

function Home() {

  return (
    <div className='bg-home pb-24'>
      <NavDesk/>

      <div className='p-6 lg:flex lg:justify-around lg:mt-16 animate-jump-in animate-once animate-duration-[2000ms] animate-fill-both'>
      <Nav/>

      <div>
      <div className='text-center mt-14 tablet:mt-24'>
        <p className='text-indigo-200 text-base tablet:text-xl font-BarlowC font-normal tracking-[2.70px] tablet:tracking-[3.38px]'>SO, YOU WANT TO TRAVEL TO</p>
        <h1 className='text-white text-[80px] tablet:text-[150px] font-normal font-Bellefair leading-[100px] tablet:leading-[150px] mt-4 tablet:mt-6'>SPACE</h1>
      </div>

      <div className='tablet:flex tablet:justify-center tablet:mt-4 tablet:mb-20'>
        <p className=' tablet:w-[444px] text-center text-indigo-200 text-[15px] tablet:text-base font-normal font-Barlow leading-[25px] tablet:leading-7'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      </div>
      
      <div className='flex justify-center lg:mt-28'>
      <div className="w-[220px] h-[220px] tablet:w-[312px] tablet:h-[312px] relative mt-14 flex justify-center pt-9 rounded-full hover:bg-gray-500 transition-all duration-1000">
       <Link className='flex justify-center' to={'/DESTINATION'}>
        <button className="w-[150px] h-[150px] tablet:w-[242px] tablet:h-[242px] text-gray-950 text-xl tablet:text-[32px] font-normal font-Bellefair tracking-wider absolute bg-white rounded-full animate-pulse animate-infinite animate-duration-[1500ms] animate-ease-in animate-normal animate-fill-both">EXPLORE</button>
      </Link>
    </div>
    </div>

     </div>
    </div>
  )
}

export default Home
