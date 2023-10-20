export const CardsDiccionary = ({ url, children }) => {
  return (
    <div className=" h-auto p-4 my-10 sm:w-1/2 md:w-1/3 lg:w-auto mx-4 bg-sky-100 rounded-md overflow-hidden shadow-lg ">
      <img src={url} alt="" />
      <div className="p-4">
        <h2 className="text-xl text-center font-semibold text-gray-800"> {children} </h2>
      </div>
    </div>
  )
}
