import React, { useContext, useState } from 'react'
import { DataContext } from '../contexts/DataContext';
import Nav from './Nav'
import CrewP from './CrewP'
import NavDesk from './NavDesk';

function Crew() {
  const contextData = useContext(DataContext);
  const [selectedCrew, setSelectedCrew] = useState(contextData.crew[0]);

  const handleCrewChange = (crew) => {
    setSelectedCrew(crew);
  };

  return ( 
    <div className='bg-crew'>
      <NavDesk/>
    <div className=' flex flex-col justify-center px-6 pt-6 animate-jump-in animate-once animate-duration-[2000ms] animate-fill-both'>
    <Nav/>
    <CrewP
    crews={contextData.crew}
    selectedCrew={selectedCrew}
    onCrewChange={handleCrewChange}
    />
    </div>
    </div>
  )
}

export default Crew
