import React from 'react'

function TechP({ technologies, selectedTechnology, onTechnologyChange }) {
    const handleButtonClick = (technology) => {
        onTechnologyChange(crew);
      };

  return (
    <>
      <img src={selectedTechnology.images.landscape} className='w-full lg:hidden tablet:mb-6'/>

<div className='flex flex-col lg:flex-row lg:justify-between'>
<div className="w-full lg:w-32 flex justify-center lg:justify-start lg:mt-32 lg:ml-10 mt-7 lg:gap-6 space-x-4 lg:flex-col lg:space-x-0">
{technologies.map((technology,index) => (
    <button
      key={technology.name}
      className={`w-10 h-10 tablet:w-16 tablet:h-16 rounded-full bg-white hover:bg-opacity-100 hover:w-12 hover:h-12 tablet:hover:h-20 hover:tablet:w-20 transition-all ${selectedTechnology.name === technology.name ? 'bg-opacity-100' : 'bg-opacity-20'}`}
      onClick={() => onTechnologyChange(technology)}
    >
        <span className={`text-${selectedTechnology.name === technology.name ? 'black' : 'white'} text-base tablet:text-2xl font-normal hover:text-black font-Bellefair tracking-wide`}>
            {index + 1}</span>
    </button>
  ))}
</div>

<div className='lg:flex lg:flex-col lg:justify-start lg:mt-24'>
<div className='animate-fade-down animate-once animate-duration-[1800ms] animate-ease-linear animate-fill-both'>
    <h3 className='text-center lg:text-justify text-indigo-200 text-sm tablet:text-base tablet:mb-6 font-normal font-BarlowC tracking-widest tablet:tracking-[2.70px] mt-9 mb-1 uppercase'>THE TERMINOLOGY…</h3>
    <h1 className='text-center lg:text-justify tablet:mb-6 text-white text-2xl tablet:text-[48px] lg:text-[54.5px] font-normal font-Bellefair uppercase'>{selectedTechnology.name}</h1>
  </div>

  <div className="text-center lg:text-justify tablet:flex tablet:justify-center px-6 lg:px-0 mt-3 mb-24 text-indigo-200 text-[15px] lg:text-lg tablet:text-base font-normal font-Barlow leading-[25px]">
  <p className='tablet:w-[458px]'>{selectedTechnology.description}</p></div>
  </div>
<div className='hidden mb-40 w-[515px] h-[527px] right-0 lg:flex '>
  <img src={selectedTechnology.images.portrait} className='w-full h-full'   /></div>
</div>

    </>
  )
}

export default TechP
