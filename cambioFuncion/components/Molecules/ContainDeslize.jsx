

//esto sera un contenedor evonvelvente con deslize x
export default function ContainDeslize({children}) {
    
  return (
    <div className="flex  mt-2 overflow-x-auto whitespace-no-wrap w-[98%] scroll-container justify-start ml-2 mr-1 px-2">
      <div className="flex justify-start gap-x-2 scroll-container">
           {children}
      </div>
    </div>
  )
}
