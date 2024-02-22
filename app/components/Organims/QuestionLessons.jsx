"use client";

import Link from "next/link";
import { QuizzWord } from "@/js/quiizzWord";
import { useState, useEffect } from "react";
import Answer from "../Atoms/Answer";
import { actualizarStar } from "@/services/aumentarPuntos";

export default function QuestionLessons({ preguntas, idLesson }) {
  const [informacion, setInformacion] = useState(null);
  const [preguntas2, setPreguntas2] = useState(null);
  const [respuestas, setRespuestas] = useState(null);
  const [opciones, setOpciones] = useState(null);
  const [indice, setIndice] = useState(0);
  const [correctas, setCorrecta] = useState(null);
  const [puntos, setPuntos] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");

    const formattedToken = token.slice(1, token.length - 1);

    const peticiones = preguntas.map((pregunta) => {
      return `http://localhost:10000/api/preguntas/${pregunta}`;
    });

    console.log(peticiones);
    console.log("formated " + formattedToken);
    const promesas = peticiones.map((peticion) => {
      return fetch(peticion, {
        headers: {
          Authorization: formattedToken,
        },
      });
    });

    Promise.all(promesas)
      .then((respuestas) => {
        return Promise.all(respuestas.map((respuesta) => respuesta.json()));
      })
      .then((data) => {
        const convertido = data.map((e) => {
          return e.pregunta;
        });

        setInformacion(convertido);

        //aca se guardan las preguntas
        setPreguntas2(
          data.map((e) => {
            return e.pregunta.nombre;
          })
        );

        setRespuestas(
          data.map((e) => {
            return e.pregunta.opciones;
          })
        );
        setCorrecta(
          data.map((e) => {
            return e.pregunta.opcionCorrecta;
          })
        );
        setOpciones(data[0].pregunta.opciones);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log(error);
      });
  }, [preguntas]);

  const evaluarResultado = (word) => {
    if (preguntas2.length != indice) {
      if (correctas[indice] == word) {
        setPuntos(puntos + 1);
      } else {
      }
    } else {
      console.log("ya no se puede seguir recorriendo");
    }
    setIndice(indice + 1);
  };

  //informacion && preguntas2
  if (informacion && preguntas2) {
    //Enviar que gano
    if (puntos == preguntas2.length) {
      const token = localStorage.getItem("token");
      const formattedToken = token.slice(1, token.length - 1);
      let id = localStorage.getItem("id").toString();
        id = id.slice(1, id.length - 1);
      actualizarStar(id, formattedToken, idLesson);
    }
    if (indice >= preguntas2.length) {
      return (
        <div className="flex flex-col items-center w-full h-screen px-2 pt-2 rounded-md ">
          <h1 className="font-mono text-2xl font-bold">Resultados</h1>
          <div className="flex flex-col items-center w-1/2 py-5 mt-2 bg-white rounded-md shadow-sm h-96 shadow-black">
            <p className="py-1 text-center text-white bg-blue-900 rounded-md w-72">
              Puntos {puntos}:{preguntas2.length}{" "}
            </p>
            {puntos == preguntas2.length ? (
              <p className="mt-16 font-mono text-2xl font-semibold">
                Felicitaciones haz aprobado exitosamente
              </p>
            ) : (
              <p className="mt-16 font-mono text-2xl font-semibold">
                Sigue practicando yo se que lo lograras
              </p>
            )}
            <Link
              className="px-2 py-1 mt-4 text-center text-white bg-blue-800"
              href={"/"}
            >
              Volver al menu
            </Link>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-center w-full h-screen px-2 pt-2 rounded-md ">
      {preguntas2 && (
        <h1 className="mt-4 font-mono text-2xl font-black text-center">
          {preguntas2[indice]}
        </h1>
      )}

      {!informacion ? (
        <p>Cargando...</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center w-8/12 mt-12 xl:gap-x-16 xl:gap-y-16 gap-x-2 gap-y-5">
          {opciones &&
            respuestas[indice].map((e, i) => {
              return (
                <Answer key={i} respuesta={e} evaluar={evaluarResultado} />
              );
            })}
        </div>
      )}
    </div>
  );
}
