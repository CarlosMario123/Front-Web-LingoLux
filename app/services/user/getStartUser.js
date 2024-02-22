export async function getStartUser(id) {
    const url = `http://localhost:10000/api/usuarios/${id}`;

    try {
        let data = await fetch(url);
        data = await data.json();
 
        return data.usuario.can_estrellas;
    } catch (error) {
        console.error("Hubo un error en getStartUser:", error);
        throw error;
    }
}

