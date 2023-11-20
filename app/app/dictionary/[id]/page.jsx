import CardDictionary from '@/components/Molecules/CardDicTionary';
import Navbar from '@/components/Molecules/Navbar';

import axios from "axios";
async function getData(id){
    const url = `http://localhost:3000/API/libroVocabulario//${id}`;
   const {data} = await axios.get(url)

   return data;
}
const Dictionarypage = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);

    return (
      <div className="w-full bg-white">
        <Navbar/>
        <div className="flex flex-wrap justify-around px-20 py-4 mt-4 gap-x-10 gap-y-6">
        {data.libro.contenido.map((word, index) => (
            <CardDictionary
              key={index}
              word={word}
            />
          ))}
        </div>
      </div>
    );

};

export default Dictionarypage;
