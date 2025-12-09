import { swap } from './crypt-function3.js';

export function func2(message) {
    message = swap(message);
    //add 2 random charachters after each char in each of the words
    const words = message.trim().split(/\s+/);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let word of words) {
        for (let char of word) {
            const randChar = chars.charAt(Math.floor(Math.random() * chars.length));
            result += char + randChar;
        }
        result += ' ';
    }
    return result.trim();
}