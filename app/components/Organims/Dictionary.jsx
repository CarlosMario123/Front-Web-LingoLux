import { CardsDiccionary } from "../Molecules/CardsDiccionary";
import  Navbar  from "../Molecules/Navbar";

export const Dictionary = () => {
  const petsArray = [
    { ingles: "Dog", espanol: "Perro" },
    { ingles: "Cat", espanol: "Gato" },
    { ingles: "Fish", espanol: "Pez" },
    { ingles: "Bird", espanol: "Pájaro" },
    { ingles: "Rabbit", espanol: "Conejo" },
    { ingles: "Hamster", espanol: "Hámster" },
    { ingles: "Turtle", espanol: "Tortuga" },
    { ingles: "Guinea Pig", espanol: "Cobaya" },
    { ingles: "Snake", espanol: "Serpiente" },
    { ingles: "Horse", espanol: "Caballo" },
    { ingles: "Ferret", espanol: "Hurón" },
    { ingles: "Parrot", espanol: "Loro" },
    { ingles: "Goldfish", espanol: "Pez Dorado" },
    { ingles: "Turtle", espanol: "Tortuga" },
    { ingles: "Guinea Pig", espanol: "Cobaya" },
    { ingles: "Snake", espanol: "Serpiente" },
    { ingles: "Horse", espanol: "Caballo" },
    { ingles: "Ferret", espanol: "Hurón" },
    { ingles: "Parrot", espanol: "Loro" },
    { ingles: "Goldfish", espanol: "Pez Dorado" },
  ];

  return (
    <div className="w-screen bg-white">
      <Navbar/>
      <div className="flex flex-wrap justify-around px-2 py-4 gap-x-4 gap-y-4">
        {petsArray.map((word, index) => (
          <CardsDiccionary
            key={index}
            children={word.ingles}
            childrenEs={word.espanol}
          />
        ))}
      </div>
    </div>
  );
};
