import { removesalt } from "./decrypt-function1.js";

const e = "27182818284590";

export function eulerShiftDecrypt() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // (ingen space om uppgiften kör A–Z)
  const n = alphabet.length;

  // Om removesalt returnerar en ARRAY av bokstäver:
  const msgArr = removesalt(encryptionmessage); // t.ex. ["S","A","Q",...]
  // Om den returnerar en STRÄNG istället, använd: const msgArr = removesalt(encryptionmessage).split("");

  const result = [];

  for (let i = 0; i < msgArr.length; i++) {
    const ch = msgArr[i];                 // bokstav
    const shift = parseInt(e[i % e.length], 10); // siffra, återanvänd e om meddelandet är längre

    const idx = alphabet.indexOf(ch);
    /*if (idx === -1) {
      // om ch inte finns i alfabetet (t.ex. mellanslag), bestäm vad du vill göra:
      result.push(ch);
      continue;
    }*/

    // "SÄNK med E" = idx - shift, med wrap
    const newIdx = (idx - shift + n) % n;
    result.push(alphabet[newIdx]);
  }

  return result.join("");
}
const encryptionmessage = "hejehj"
eulerShiftDecrypt(removesalt(encryptionmessage))
console.log(eulerShiftDecrypt())
