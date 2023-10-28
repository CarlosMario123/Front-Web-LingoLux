import OrganismoHistory from "@/components/Organims/OrganismoHistory";
import ResouceNoFound from "@/components/Organims/ResouceNoFound";
import axios from "axios";
async function traerHistoria(id){
    const url = `http://127.0.0.1:5000//historias/${id}`;
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
    }catch(e){
      return (<ResouceNoFound/>)
    }
    
 
  return (
    <div>
      <OrganismoHistory  data={datos}/>
    </div>
  )
}
