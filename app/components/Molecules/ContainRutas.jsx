"use client";
import { TextTitle } from "../Atoms/Text.Title";
import { CardsRoute } from "./CardsRoute";
import ContainDeslize from "./ContainDeslize";
import { useState, useEffect } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import axios from "axios";
export default function ContainRutas() {
  const [posicionX1, setPosicionX1] = useState(0);
  const [posicionX2, setPosicionX2] = useState(3);
  const windowWidth = useWindowWidth();
  const [arrayRutas, setArrayRutas] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log("token",token)
  token = token.slice(1, token.length - 1);
    console.log(token)
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(
            "http://localhost:3000/API/lecciones",
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setArrayRutas(response.data.lecciones);
         
        } else {
          console.log("token no usado pai");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (posicionX2 - 3 < 0) {
      setPosicionX2(3);
      setPosicionX1(0);
    }

    if (windowWidth > 1142) {
      setPosicionX1(posicionX2 - 3);
    }

    if (windowWidth < 1115) {
      setPosicionX1(posicionX2 - 2);
    }

    if (windowWidth < 843) {
      setPosicionX1(posicionX2 - 1);
    }

    return () => {};
  }, [windowWidth]);

  // Resto de tu código ...

const nextCard = () => {
  if (posicionX2 === arrayRutas.length) {
    return;
  }
  const newPosX2 = Math.min(posicionX2 + 1, arrayRutas.length);
  setPosicionX1(newPosX2 - 3);
  setPosicionX2(newPosX2);
};

const backCard = () => {
  if (posicionX1 === 0) {
    return;
  }
  const newPosX1 = Math.max(posicionX1 - 1, 0);
  setPosicionX1(newPosX1);
  setPosicionX2(newPosX1 + 3);
};

return (
  <>
    <div className="flex items-center justify-between w-full px-9">
      <TextTitle children={"Ruta de Viaje"} />
    </div>
    <ContainDeslize next={nextCard} reverse={backCard}>
      {arrayRutas.slice(posicionX1, posicionX2).map((e, i) => (
        <CardsRoute key={i} leccion={e} />
      ))}
    </ContainDeslize>
  </>
);
      }