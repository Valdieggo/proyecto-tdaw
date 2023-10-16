import { loremIpsum } from "lorem-ipsum";

const generateDogDescription = () => {
  return loremIpsum({
    count: 1,                      // Número de "cosas" a generar (parágrafos, palabras, bytes)
    format: "plain",               // "plain" o "html"
    paragraphLowerBound: 3,       // Mínimo de oraciones por párrafo.
    paragraphUpperBound: 5,       // Máximo de oraciones por párrafo.
    random: Math.random,           // Generador de números aleatorios.
    sentenceLowerBound: 3,        // Mínimo de palabras por oración.
    sentenceUpperBound: 5,       // Máximo de palabras por oración.
    units: "paragraphs",           // palabras, sentence, or paragraph
  });
};

export default generateDogDescription;
