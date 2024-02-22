export default function CardGramatica(props) {
  const { titulo, contenido, estructura, ejemplo } = props; // Desestructurar props para acceder a las propiedades

  return (
    <div className="w-11/12 p-4 pb-10 duration-150 bg-white rounded-md shadow-sm shadow-black hover:scale-105">
      <h3 className="text-xl font-bold">{titulo}</h3>
      <p>{contenido}</p>
      <div className="mt-4">
        <strong>Estructura:</strong>
        <p>{estructura}</p>
      </div>
      <div className="mt-4">
        <strong>Ejemplo:</strong>
        <p>{ejemplo}</p>
      </div>
    </div>
  );
}