import Link from "next/link"

export default function MasContent({texto,redir}) {
  return (
     <Link href={redir} className="p-1 px-2 mt-4 font-medium text-white color-basic color-boton">{texto}</Link>
  )
}
