function findLongestWord(text) {
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga
    let index;

    for(let i=0; i<words.length; i++){
        let actualWord = words[i].length;

        if(actualWord>longestWord){
            longestWord = actualWord;
            index = i;
        }
    }

    return words[index];
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"