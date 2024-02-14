import OrganismoHistory from "@/components/Organims/OrganismoHistory";
import ResouceNoFound from "@/components/Organims/ResouceNoFound";
import axios from "axios";
async function traerHistoria(id){
    const url = `http://localhost:10000/API/libroHistorias/${id}`;
   const {data} = await axios.get(url)
   return data;
}

//la page debe ser asyncrona ya que va espera una peticion asincrona
export default async function HistoriaPage({params}) {
    const {id} = params;
    let datos  = "";
    try{
        const book = await traerHistoria(id);
        datos = book;
        console.log("datos -1",book)
    }catch(e){
      return (<ResouceNoFound/>)
    }
    
 
  return (
    <div>
      <OrganismoHistory  data={datos}/>
    </div>
  )
}
