

//esto sera un contenedor evonvelvente con deslize x
export default function ContainDeslize({children}) {
    
  return (
      <div className="flex justify-between w-full px-7 gap-x-2 scroll-container">
           {children}

    </div>
  )
}
