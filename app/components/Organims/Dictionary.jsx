import { useEffect, useState } from "react";
import CardDictionary from "../Molecules/CardDicTionary";
import  Navbar  from "../Molecules/Navbar";
import { GetPets } from "@/dataFalse/pets";
export const Dictionary = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
       setData(GetPets())
      return () =>{

      }
    },[])
  return (
    <div className="w-full bg-white">
      <Navbar/>
      <div className="flex flex-wrap justify-around px-20 py-4 gap-x-10 gap-y-6 mt-4">
        {data.map((word, index) => (
          <CardDictionary
            key={index}
            word={word}
          />
        ))}
      </div>
    </div>
  );
};
