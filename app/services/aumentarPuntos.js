export const actualizarStar = async (id, token,leccion) => {

    token = token.toString();
    id = id.toString();
  
    const url = `http://localhost:10000/api/usuarios/${id}`;
     const data = await obtenerDatosLeccion(leccion,token);

    const datosAActualizar = {
        can_estrellas: data+5,
        puntaje: 10,
        lecciones_compt: 1
    };
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Agregar el token al encabezado
        },
        body: JSON.stringify(datosAActualizar),
      });
  
      // Verificar si la respuesta es exitosa (código de estado 200-299)
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const data = await response.json(); 

    } catch (error) {
      console.error('Error al actualizar datos:', error);
    }
};

export const obtenerDatosLeccion = async (leccion, token) => {
    const url = `http://localhost:10000/API/lecciones/${leccion}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': token,
            },
        });

        // Verificar si la respuesta es exitosa (código de estado 200-299)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        return data.leccion.requisito; // Devolver los datos para su posterior procesamiento
    } catch (error) {
        console.error('Error al obtener datos de la lección:', error);
        throw error; // Re-lanzar el error para que pueda ser manejado externamente
    }
};

