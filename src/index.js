import { choice, remove } from './helpers';
import foods from './foods';


const item = choice(foods);

console.log(`I'd like one ${item}, please`);
console.log(`Here you go: ${item}`);
console.log(`Delicious! May I have another?`);

const leftOver = remove(item, foods);


console.log(`I'm sorry, we're all out. We have ${leftOver.length} left.`);
