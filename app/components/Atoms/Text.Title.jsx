import React from 'react'

export const TextTitle = ({ children, aligned }) => {
  return (
    <h1 className = { ` ${ aligned } my-6 text-black text-2xl  font-bold text-center  w-full sm:text-left `} >
        { children }
    </h1>
  )
}
