import axios from "axios";

export async function historias() {
    console.log("en historia")
  let datos = [];

  try {
    const response = await axios.get("http://localhost:10000/API/libroHistorias");
    // Manejar la respuesta exitosa
    console.log('Respuesta exitosa:', response.data);
    datos = response.data;
  } catch (error) {
    // Manejar errores
    console.error('Error en la solicitud:', error);
  }

  return datos;
}
