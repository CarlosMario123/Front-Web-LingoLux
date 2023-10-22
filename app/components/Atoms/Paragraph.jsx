export const Paragraph = ({ children, aligned }) => {
  return (
    <p className = {` ${aligned} text-xl text-black`} >
        { children }
    </p>
  )
}
