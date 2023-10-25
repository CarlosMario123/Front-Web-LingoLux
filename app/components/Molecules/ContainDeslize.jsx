import { CardsDiccionary } from "./CardsDiccionary"

//? Esto sera un contenedor evolvente con deslize x
export default function ContainDeslize({children}) {
  return (
      
      <div className="flex justify-between w-full px-7 gap-x-2 scroll-container">
           {children} {/*//! Los children son para texto, no commponentes  */}
      </div>
  )
}
