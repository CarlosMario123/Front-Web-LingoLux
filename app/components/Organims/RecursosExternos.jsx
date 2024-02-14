"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Molecules/Navbar';
import CardRecurso from '../Molecules/CardRecurso';

export function RecursosExternos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:10000/API/recursoExterno', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data.recursosExternos);
        console.log(response.data.recursosExternos)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  return (
    <div className='flex flex-col w-full h-screen'>
    <Navbar/>
    <div className='flex flex-col items-center w-full'>
     <h1 className='mt-4 text-2xl font-bold text-center'>Recursos externos</h1>
     <div className='flex flex-wrap items-center justify-center w-10/12 px-6 mt-8 gap-x-6 gap-y-3 '>
    {data ? (
           data.map((e)=>{
            return <CardRecurso recurso={e}/>
           })
      ) : (
        <p>No disponible por el momento</p>
      )}
    </div>
    </div>
   
   
    </div>
  );
}
