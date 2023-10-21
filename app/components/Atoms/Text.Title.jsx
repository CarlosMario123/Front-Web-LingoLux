import React from 'react'

export const TextTitle = ({ children, aligned }) => {
  return (
    <h1 className = { ` ${ aligned } mt-6 text-black text-4xl text-bold` } >
        { children }
    </h1>
  )
}