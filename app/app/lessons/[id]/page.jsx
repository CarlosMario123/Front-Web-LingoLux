

import { Leassons } from "@/components/Organims/Lessons";

 const Lessonspage = async ({params}) => {
  const {id} = params;
 
  return (
    <div>
        <Leassons leccion={id}  />
    </div>
  )
}

export default Lessonspage
