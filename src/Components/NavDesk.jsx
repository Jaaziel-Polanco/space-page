import React from 'react'
import { NavLink } from 'react-router-dom';


function NavDesk() {
  return (
    <>
    <div className=' hidden min-[700px]:flex justify-between lg:py-12'>
       <div> <a href="/"> <img src="/src/assets/logo.svg" alt="logo" className='m-6 lg:m-0 lg:ml-12 lg:mt-5 w-10 h-10 absolute bg-white rounded-full' /></a></div>

       <div className="hidden lg:flex w-[400px] ml-44 mt-12 h-px opacity-25 bg-white" />
       
  
            <div className="navMenu flex gap-7 flex-row p-8 lg:px-28 shadow-lg bg-slate-400 bg-opacity-10 backdrop-blur-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <NavLink  className={({ isActive }) => (isActive ? "activo" : null)}
              to={'/'}
              >
                <span className='font-bold pr-3'>00</span>HOME</NavLink>

              <NavLink to={'/DESTINATION'}  className={({ isActive }) => (isActive ? "activo" : null)}>
                <span className='font-bold pr-3'>01</span>DESTINATION</NavLink>

              <NavLink to={'/CREW'}  className={({ isActive }) => (isActive ? "activo" : null)}>
                <span className='font-bold pr-3'>02</span>CREW</NavLink>

              <NavLink to={'/TECHNOLOGY'} className={({ isActive }) => (isActive ? "activo" : null)}>
                <span className='font-bold pr-3'>03</span>TECHNOLOGY</NavLink>
            </div>
      </div>


      
    </>
  )
}

export default NavDesk
