// import getValue from './modules/get_value.js';
// import mapArray from './modules/map.js';
//import {getValue, mapArray} from './modules/helpers_array.js';
import {getValue, mapArray,p} from './modules/helpers_array2.js';

const superHero = [
    {id: 12345, hero: "batman", power: "money"},
    {id: 123456, hero: "aquaman", power: "fishpower"}
];

console.log(getValue(superHero, 'power'));
console.log(getValue(superHero, 'id'));
console.log(mapArray(superHero, 'hero'));
console.log(p);

