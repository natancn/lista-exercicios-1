
function nameSplitter(insertName){

const textArray = insertName.split(" ");
const lastWord = textArray.pop();
const initialsName = textArray.reduce((accumulator,textArray) => accumulator + textArray[0] + '.', '')
const answer = initialsName.toUpperCase() + lastWord.toUpperCase()

return answer
}
console.log(nameSplitter("Malphite Pedra Pedroso"))
