import CardGramatica from "../Molecules/CardGramatica";
import Navbar from "../Molecules/Navbar";

export default function PageGramatica() {
    const datos = [
      {
        titulo: "Presente Simple",
        contenido: (
            <div>
                El presente simple se utiliza para hablar sobre acciones habituales,
                verdades generales y situaciones permanentes.
            </div>
        ),
        estructura: (
            <div>
                Affirmative: Sujeto + Verbo en infinitivo (sin to) + Complemento<br />
                Negative: Sujeto + Do not/Does not + Verbo en infinitivo + Complemento<br />
                Interrogative: Do/Does + Sujeto + Verbo en infinitivo + Complemento
            </div>
        ),
        ejemplo: (
            <div>
                Affirmative: I play tennis every Saturday.<br />
                Negative: She does not like coffee.<br />
                Interrogative: Do you speak Spanish?
            </div>
        )
    },
    {
        titulo: "Pasado Simple",
        contenido: (
            <div>
                El pasado simple se utiliza para hablar sobre acciones completadas en el pasado.
            </div>
        ),
        estructura: (
            <div>
                Affirmative: Sujeto + Verbo en pasado (ed/irregular) + Complemento<br />
                Negative: Sujeto + Did not + Verbo en infinitivo + Complemento<br />
                Interrogative: Did + Sujeto + Verbo en infinitivo + Complemento
            </div>
        ),
        ejemplo: (
            <div>
                Affirmative: I visited Paris last summer.<br />
                Negative: She did not eat sushi yesterday.<br />
                Interrogative: Did you watch the movie?
            </div>
        )
    },
    {
      titulo: "Presente Progresivo",
      contenido: (
          <div>
              El presente progresivo se utiliza para hablar sobre acciones que están ocurriendo en el momento de hablar.
          </div>
      ),
      estructura: (
          <div>
              Affirmative: Sujeto + am/is/are + Verbo en gerundio + Complemento<br />
              Negative: Sujeto + am/is/are not + Verbo en gerundio + Complemento<br />
              Interrogative: Am/Is/Are + Sujeto + Verbo en gerundio + Complemento
          </div>
      ),
      ejemplo: (
          <div>
              Affirmative: She is reading a book right now.<br />
              Negative: They are not working on the project.<br />
              Interrogative: Are you watching TV?
          </div>
      )
  },
  {
    titulo: "Presente Perfecto",
    contenido: (
        <div>
            El presente perfecto se utiliza para hablar sobre acciones que han ocurrido en algún momento en el pasado, pero que aún tienen relevancia en el presente.
        </div>
    ),
    estructura: (
        <div>
            Affirmative: Sujeto + has/have + participio pasado del verbo + Complemento<br />
            Negative: Sujeto + has/have not + participio pasado del verbo + Complemento<br />
            Interrogative: Has/Have + Sujeto + participio pasado del verbo + Complemento
        </div>
    ),
    ejemplo: (
        <div>
            Affirmative: I have visited that museum before.<br />
            Negative: She has not finished her homework yet.<br />
            Interrogative: Have you ever traveled abroad?
        </div>
    )
}    
    ]
  return (
    <>
     <Navbar/>
    <div className="flex flex-col items-center justify-center w-full mt-10 gap-y-8">
        
    {datos.map((dato, index) => (
      <CardGramatica key={index} {...dato} />
    ))}
  </div>
  
    </>
  )
}
