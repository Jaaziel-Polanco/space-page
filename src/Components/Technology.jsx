import React, { useContext, useState } from 'react'
import { DataContext } from '../contexts/DataContext';
import Nav from './Nav'
import TechP from './TechP'
import NavDesk from './NavDesk';

function Technology() {
  const contextData = useContext(DataContext);
  const [selectedTechnology, setSelectedTechnology] = useState(contextData.technology[0]);

  const handleTechnologyChange = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className='bg-tech flex flex-col justify-center animate-flip-up animate-once animate-duration-[2000ms] animate-ease-in-out animate-fill-both'>
      <NavDesk/>
    <div className=' p-6 '>
      <Nav/>
      <div className='flex justify-center tablet:justify-normal gap-3 mt-8 mb-7'>
        <span className='opacity-25 text-white text-base tablet:text-xl lg:text-[28px] font-bold font-BarlowC tracking-[2.70px] tablet:tracking-[3.38px]'>03</span>
        <h1 className='text-white text-base tablet:text-xl lg:text-[28px] font-normal font-BarlowC tracking-[2.70px] tablet:tracking-[3.38px]'>SPACE LAUNCH 101</h1>
      </div>
    </div>

    <TechP
    technologies={contextData.technology}
    selectedTechnology={selectedTechnology}
    onTechnologyChange={handleTechnologyChange}
    />

    

    </div>
  )
}

export default Technology
