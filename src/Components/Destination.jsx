import React, { useContext, useState } from 'react';
import { DataContext } from '../contexts/DataContext';
import Nav from './Nav';
import DestinationsP from './DestinationsP';
import NavDesk from './NavDesk';

function Destination() {
  const contextData = useContext(DataContext);
  const [selectedDestination, setSelectedDestination] = useState(contextData.destinations[0]);

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className='bg-destination'>
      <NavDesk/>
    <div className='flex flex-col justify-center p-6'>
      <Nav />
      <DestinationsP
        destinations={contextData.destinations}
        selectedDestination={selectedDestination}
        onDestinationChange={handleDestinationChange}
      />
    </div>
    </div>
  );
}

export default Destination;
