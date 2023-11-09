"use client"
import Image from 'next/image';
import useWindowWidth from '@/hooks/useWindowWidth';

export const CardsRoute = ({ url, children}) => {
  const windowWidth = useWindowWidth();
   let medidaImg = (windowWidth < 642) ? 80 : 90;
  return (
    
    <div className="flex flex-row items-center w-56  rounded-md card-style sm:w-72">
       <div className='w-4 h-full gradientCard rounded-l-md relative'></div>
      <div className='flex flex-col items-center w-full pt-1'>
      <Image  src={url} alt="" width={medidaImg} height={medidaImg}/>
      <div className="pt-1 pb-4">
        <h2 className="font-semibold text-center text-gray-800 sm:text-xl text-[1rem]">{children}</h2>
        
      </div>
      </div>
     
     
    </div>
  );
};
