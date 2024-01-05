import React from 'react';

function DestinationsP({ destinations, selectedDestination, onDestinationChange }) {
  const handleButtonClick = (destination) => {
    onDestinationChange(destination);
  };

  return (
    <>
      <div className='flex justify-center tablet:justify-normal gap-3 mt-8'>
        <span className='opacity-25 text-white text-base tablet:text-xl font-bold font-BarlowC tracking-[2.70px] tablet:tracking-[3.38px]'>01</span>
        <h1 className='text-white text-base tablet:text-xl font-normal font-BarlowC tracking-[2.70px] tablet:tracking-[3.38px]'>PICK YOUR DESTINATION</h1>
      </div>

     <div className='flex flex-col lg:flex-row lg:justify-evenly lg:mb-24'>

      <div className='flex justify-center'>
        <img className='w-[200px] h-[200px] lg:hidden tablet:w-[300px] tablet:h-[300px] self-center mt-10 animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'
       src={selectedDestination.images.png} />
       <img className='hidden lg:block self-center mt-10 animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'
       src={selectedDestination.images.png} />
       </div> 

      <div>
       <div className='flex justify-center'>
      <div className="w-[237.50px] h-7 relative self-center mt-7 flex justify-between">
  {destinations.map((destination) => (
    <button
      key={destination.name}
      className={`text-indigo-200 text-sm lg:text-base tablet:text-base font-normal font-BarlowC tracking-widest tablet:tracking-[2.70px] hover:text-white hover:text-lg transition-all ${selectedDestination.name === destination.name ? 'text-white font-bold border-b-2 border-white' : ''}`}
      onClick={() => onDestinationChange(destination)}
    >
      {destination.name}
    </button>
  ))}
  </div>
    </div>

      <div>
        <div>
        <h1 className='text-center text-white text-[56px] tablet:text-[88px] lg:text-[100px] font-normal font-Bellefair mt-3 uppercase animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'>{selectedDestination.name}</h1>
        <div className='flex justify-center -mt-2 mb-9'>
          <p className='w-[327px] h-[125px] text-center lg:mb-12 text-indigo-200 text-[15px] tablet:text-base lg:text-lg font-normal font-Barlow leading-[25px] tablet:leading-7 animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'>
            {selectedDestination.description}
          </p>
        </div>
      </div>

      <hr className='border-gray-700' />

      <div className="tablet:flex justify-center gap-24">
        <div className='animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'>
        <h3 className='text-center text-indigo-200 text-sm font-normal font-BarlowC tracking-widest mt-9 mb-1'>AVG. DISTANCE</h3>
        <h1 className='text-center text-white text-[28px] font-normal font-Bellefair uppercase'>{selectedDestination.distance}</h1>
      </div>

      <div className='mb-10 animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'>
        <h3 className='text-center text-indigo-200 text-sm font-normal font-BarlowC tracking-widest mt-9 mb-1 uppercase'>Est. travel time</h3>
        <h1 className='text-center text-white text-[28px] font-normal font-Bellefair uppercase'>{selectedDestination.travel}</h1>
      </div>
      </div>
        
        </div>

         </div>

         </div>
    </>
  );
}

export default DestinationsP;
