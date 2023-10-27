
import Image from 'next/image';
export const CardsRoute = ({ url, children}) => {
  return (
    <div className="rounded-md card-style w-72 flex flex-col items-center">
      <Image  src={url} alt="" width={90} height={90}/>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center text-gray-800 ">{children}</h2>
      </div>
    </div>
  );
};
