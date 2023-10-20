import React from 'react';

export const CardsRoute = ({ url, children, description }) => {
  return (
    <div className="p-4 my-10 sm:w-1/2 md:w-1/3 lg:w-auto mx-4 bg-sky-100 rounded-md overflow-hidden shadow-lg">
      <img className="w-full h-auto" src={url} alt="" />
      <div className="p-4">
        <h2 className=" text-center text-xl font-semibold text-gray-800">{children}</h2>
        <p className=" text-justify text-gray-600">{description}</p>
      </div>
    </div>
  );
};
