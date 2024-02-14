export const data = async () => {
    const url = "http://localhost:10000/API/memorama";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Consumption Started", data);
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Puedes manejar el error según tus necesidades
    }
};
