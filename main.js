import { eulerShiftDecrypt } from "./decrypt-function2.js";

const encrypted = "SARQJEDBMKMBJZQHNTRNA";

const afterEuler = eulerShiftDecrypt(encrypted);

console.log(afterEuler);
