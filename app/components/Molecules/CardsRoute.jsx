import React from 'react';

export const CardsRoute = ({ url, children}) => {
  return (
    <div className="rounded-md bg-sky-100">
      <img className="w-full h-32" src={url} alt="" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center text-gray-800 ">{children}</h2>
      </div>
    </div>
  );
};
