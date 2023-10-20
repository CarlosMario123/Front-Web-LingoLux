import React from 'react'

export const CardsDay = ({ url, childrenEng, childrenEs  }) => {
  return (
    <div className=" my-10 mmy-10 sm:w-1/2 md:w-1/3 lg:w-auto mx-4 bg-sky-100 rounded-md overflow-hidden shadow-lg">
        <img src= { url } alt="" />
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800"> { childrenEng } </h2>
            <p className="text-gray-600">{ childrenEs }</p>
        </div>
    </div>
  )
}
