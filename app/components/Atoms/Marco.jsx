import React from 'react'
import { useState } from 'react'
export default function Marco({imagen}) {

  return (
    <div className='w-[10rem] h-[10rem] bg-white flex justify-center items-center'>
        <img src={imagen} alt="" className='w-32 h-32'/>
    </div>
  )
}
