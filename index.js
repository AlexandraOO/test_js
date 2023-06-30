console.log("Hello,Sasha");

let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

let s = (Math.abs(x1 - x2)) * (Math.abs(y1 - y2));

console.log(s);


let a = 13.890123;
let b = 2.891564;
let n = 3;

let d = Math.round(a % 1 * Math.pow(10, n));
let c = Math.round(b % 1 * Math.pow(10, n));

console.log(d);
console.log(c);

console.log(d > c);
console.log(d < c);
console.log(d >= c);
console.log(d <= c);
console.log(d === c);
console.log(d !== c);

let k = -3;
let m = -10;

let abs = Math.abs(m - k);

let random_number = Math.random() * abs;

let min = Math.min(k, m);
let max = Math.max(k, m);

console.log(min + random_number);

console.log(max - random_number);

console.log((min + random_number) > (max - random_number));
console.log((min + random_number) < (max - random_number));
console.log((min + random_number) >= (max - random_number));
console.log((min + random_number) <= (max - random_number));
console.log((min + random_number) === (max - random_number));
console.log((min + random_number) !== (max - random_number));
