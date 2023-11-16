export function QuizzWord(data,index){

    let words = [...data[index].respuestas,data[index].spanish]
    
 // Revuelve las palabras
 words = words.sort(() => Math.random() - 0.5);

 console.log(words);
    console.log(words)
    return words


}