export function Getleccion(){
    const lecciones = [
        {
          "_id": "asfsasfaafsa",
          "nombre": "Leccion 1",
          "temas": [
            {
              "id": 1,
              "nombre": "las vocales",
              "cuerpo": "Sonido corto: En palabras como cat o bat, la vocal A suena como la a en gato en español.",
              "imagenes": [
                {
                  "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg",
                  "texto": "cat"
                },
                {
                  "url": "https://sundayafternoons.com/cdn/shop/products/havana-hat-tan-front-ss20-2500px_7920e1df-9840-4fef-b414-824a1f252f60_600x@2x.jpg?v=1630616903",
                  "texto": "hat"
                }
              ]
            }
          ],
          "preguntas": [
            {
              "id": 1,
              "pregunta": "como suena el sonido largo de la vocal A en ingles",
              "opciones": ["ei", "ai", "a", "iu"],
              "opcionCorrecta": "ei"
            }
          ]
        }
      ];

      return lecciones
}