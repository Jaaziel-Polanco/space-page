import React from 'react'


function CrewP({ crews, selectedCrew, onCrewChange }) {
    const handleButtonClick = (crew) => {
        onCrewChange(crew);
      };

  return (
    <div className='justify-center flex flex-col lg:flex-row lg:gap-36'>

      <div className='flex flex-col'>
    <div className='flex justify-center lg:justify-start tablet:justify-normal gap-3 mt-8 mb-7'>
        <span className='opacity-25 text-white text-base tablet:text-xl font-bold font-BarlowC tracking-[2.70px] tablet:tracking-[3.38px]'>02</span>
        <h1 className='text-white text-base tablet:text-xl font-normal font-BarlowC tracking-[2.70px] tablet:tracking-[3.38px] lg:mb-32'>MEET YOUR CREW</h1>
      </div>

      <img className='w-[160px] h-[222px] self-center tablet:hidden' src={selectedCrew.images.png}/> <hr className='tablet:hidden border-[1px] border-gray-700' />
      
      <div className="tablet:hidden w-full flex justify-center mt-7 space-x-4">
  {crews.map((crew) => (
    <button
      key={crew.name}
      className={`w-3 h-3 rounded-full bg-white hover:bg-opacity-100 hover:h-5 hover:w-5 transition-all ${selectedCrew.name === crew.name ? 'bg-opacity-100' : 'bg-opacity-20'}`}
      onClick={() => onCrewChange(crew)}
    />
  ))}
</div>

    <div className='animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'>
        <h3 className='text-center lg:text-start opacity-50 text-white text-base tablet:text-2xl lg:text-[32px] tablet:mb-5 font-normal font-Bellefair mt-9 mb-1 uppercase'>{selectedCrew.role}</h3>
        <h1 className='text-center lg:text-start text-white text-2xl tablet:text-[48px] lg:text-[56px] font-normal font-Bellefair uppercase lg:leading-[50px]'>{selectedCrew.name}</h1>
      </div>

      <div className="text-center lg:text-start tablet:w-[458px] self-center mt-3 tablet:mt-7 mb-20 lg:mb-32 tablet:mb-10 text-indigo-200 text-[15px] tablet:text-base lg:text-lg font-normal font-Barlow leading-[25px]">{selectedCrew.bio}</div>

      <div className="hidden tablet:flex w-full justify-center lg:justify-start lg:ml-24 space-x-4">
  {crews.map((crew) => (
    <button
      key={crew.name}
      className={`w-4 h-4 rounded-full bg-white hover:bg-opacity-100 hover:w-6 hover:h-6 transition-all ${selectedCrew.name === crew.name ? 'bg-opacity-100' : 'bg-opacity-20'}`}
      onClick={() => onCrewChange(crew)}
       />
       ))}
     </div>

     </div>

      <div className='flex justify-center'>
        <img className='w-[400px] h-[462px] lg:hidden self-center hidden tablet:block tablet:mt-16' src={selectedCrew.images.png}/>
        <img className='self-center hidden lg:block tablet:mt-16' src={selectedCrew.images.png}/>

      </div>
      
    </div>
  )
}

export default CrewP
