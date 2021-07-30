import { num } from './modules/test.js';
console.log('before===>',num)
setTimeout(() => {
    console.log('num===>', num)  
}, 2000);
