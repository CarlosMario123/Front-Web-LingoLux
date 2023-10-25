import MasContent from "../Atoms/MasContent";
import { TextTitle } from "../Atoms/Text.Title";
import { CardsDiccionary } from "./CardsDiccionary";
import ContainDeslize from "./ContainDeslize";

export default function ContainDiccionary({ arrayDictionry, children }) {
  return (
    <>
    <div className="flex items-center justify-between w-full px-7">
    <TextTitle children={"Diccionarios"} />
   
    </div>
      
      <ContainDeslize>
        {/*//! Agrega como funciona este Componente  */}
      {arrayDictionry.slice(0, 5).map((word, index) => (
          <CardsDiccionary key={index} children={word} /> 
        ))}
      </ContainDeslize>
      <div className="flex justify-end w-full px-8">
      <MasContent texto={"Ver mas"} redir={"/"}/> 
      </div>
   
    </>
  );
}
