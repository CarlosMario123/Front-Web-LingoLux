

import { Leassons } from "@/components/Organims/Lessons";
import axios from "axios";

 const Lessonspage = async ({params}) => {
  const {id} = params;
 
  return (
    <div>
        <Leassons leccion={id}  />
    </div>
  )
}

export default Lessonspage
