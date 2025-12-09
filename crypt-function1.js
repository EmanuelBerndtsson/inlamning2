import { swap } from './crypt-function3.js';

export function hejsan(message) {
    const reversedMessage = swap(message);
    return reversedMessage;
}
