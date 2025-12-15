import { removesalt } from "./decrypt-function1.js";

const E = "27182818284590";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // A–Z

export function eulerShiftDecrypt(encryptionmessage) {
  // removesalt() ger en ARRAY, t.ex. ["S","A","Q",...]
  const messageArr = removesalt(encryptionmessage);

  const result = [];
  const n = ALPHABET.length;

  for (let i = 0; i < messageArr.length; i++) {
    const ch = messageArr[i];

    // siffra från E (återanvänd om meddelandet är längre)
    const shift = Number(E[i % E.length]);

    // hitta bokstavens index i alfabetet
    const idx = ALPHABET.indexOf(ch);

    // om tecknet inte finns i alfabetet (t.ex. mellanslag), behåll det
    if (idx === -1) {
      result.push(ch);
      continue;
    }

    // "sänk" = minus shift, med wrap
    const newIdx = (idx - shift + n) % n;
    result.push(ALPHABET[newIdx]);
  }

  // returnera som sträng (om du hellre vill ha array: return result;)
  return result.join("");
}
