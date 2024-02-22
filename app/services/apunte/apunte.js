
export async function getApunte(token) {
    const apiUrl = 'http://localhost:10000/API/apuntes/usuario/';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });
  
      if (!response.ok) {
        // Maneja los errores aquí
        const errorData = await response.json();
        console.error(errorData);
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
   
      return data

    } catch (error) {
 
      console.error(error);
      throw error;
    }
  }

  export const updateApunte = async (token, nuevoContenido) => {
    console.log("updata")
    console.log(token)
    try {
      const response = await fetch("http://localhost:10000/API/apuntes", {
        method: 'PUT',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contenido: nuevoContenido }),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar el apunte: ${response.statusText}`);
        console.log(response.statusText)
      }
    } catch (error) {
      console.error('Error al actualizar el apunte:', error);
      throw error;
    }
  };