import React from 'react';
import Link from 'next/link';

const NavSide = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
    
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="absolute z-50 flex flex-col items-center min-h-full p-4 text-white color-basic menu w-80 text-base-content gap-y-10">
        <h1 className='text-2xl font-black text-white'>Opciones</h1>
         <Link href={"/home"} className="font-normal  text-roboto text-[1.5rem] text-white">
        Aprender
      </Link>
        
      
      <Link href={"/sala"} className="font-normal  text-white  text-roboto text-[1.5rem]">
        Sala
      </Link>
      <Link href={"/status"} className="font-normal text-roboto text-[1.5rem] text-white ]">
        Estatus
      </Link>
      <label htmlFor="my-drawer-4" className='font-normal text-roboto text-[1.5rem]'>Regresar</label>
        </ul>
      </div>
    </div>
  );
};

export default NavSide;
