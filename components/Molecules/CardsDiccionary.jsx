export const CardsDiccionary = ({ url, children, childrenEs }) => {
  return (
    <div className="flex h-[12rem] rounded-md shadow-lg color-basic w-[11rem]">
      <div className = ' p-4'>
        <h2 className="w-full text-[1.1] font-semibold text-center text-gray-800"> {children} </h2>
        <img src={url} alt="" />
        <p className = "text-center text-gray-600 "> { childrenEs } </p>
      </div>
    </div>
  )
}
