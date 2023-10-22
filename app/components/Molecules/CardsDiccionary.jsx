export const CardsDiccionary = ({ url, children, childrenEs }) => {
  return (
    <div className=" h-auto p-4 my-10 w-96 bg-sky-100 rounded-md shadow-lg ">
      <img src={url} alt="" />
      <div className="p-4">
        <h2 className="text-xl text-center font-semibold text-gray-800"> {children} </h2>
        <p className=" text-center text-gray-600">{ childrenEs }</p>
      </div>
    </div>
  )
}
