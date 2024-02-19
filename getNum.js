import { num } from './modules/test.js';
console.log('before===>',num) // 3、change er
setTimeout(() => {
    console.log('num===>', num)  
}, 2000);
