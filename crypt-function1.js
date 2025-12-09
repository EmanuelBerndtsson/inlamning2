import { func2 } from './crypt-function2.js';

export function hejsan(message) {
    message = func2(message)
    const words = message.trim().split(/\s+/);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    //add three random charachters before and after each word
    for (let word of words) {
        let prefix = '';
        let suffix = '';
        for (let i = 0; i < 3; i++) {
            const randChar1 = chars.charAt(Math.floor(Math.random() * chars.length));
            const randChar2 = chars.charAt(Math.floor(Math.random() * chars.length));
            prefix += randChar1;
            suffix += randChar2;
        }
        result += prefix + word + suffix + ' ';
    }
    return result.trim();
}
