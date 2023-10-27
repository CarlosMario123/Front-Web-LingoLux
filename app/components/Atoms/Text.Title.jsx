import React from 'react'

export const TextTitle = ({ children, aligned }) => {
  return (
    <h1 className = { ` ${ aligned } my-6 text-black text-2xl  font-bold `} >
        { children }
    </h1>
  )
}
