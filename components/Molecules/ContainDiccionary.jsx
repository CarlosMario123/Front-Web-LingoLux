import { TextTitle } from "../Atoms/Text.Title";
import { CardsDiccionary } from "./CardsDiccionary";
import ContainDeslize from "./ContainDeslize";

export default function ContainDiccionary({ arrayDictionry, children }) {
  return (
    <>
      <TextTitle children={"Diccionarios"} />
      <ContainDeslize>
        {arrayDictionry.map((word, index) => (
          <CardsDiccionary key={index} children={word} />
        ))}
      </ContainDeslize>
    </>
  );
}
