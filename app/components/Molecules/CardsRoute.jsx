"use client"
import Image from 'next/image';
import useWindowWidth from '@/hooks/useWindowWidth';

export const CardsRoute = ({ url, children}) => {
  const windowWidth = useWindowWidth();
   let medidaImg = (windowWidth < 642) ? 80 : 90;
  return (
    <div className="flex flex-col items-center w-56 pt-1 rounded-md card-style sm:w-72">
      <Image  src={url} alt="" width={medidaImg} height={medidaImg}/>
      <div className="p-4">
        <h2 className="font-semibold text-center text-gray-800 sm:text-xl text-[1rem]">{children}</h2>
      </div>
    </div>
  );
};
