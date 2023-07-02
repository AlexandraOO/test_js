console.log("Hello,Sasha");

// 2 модуль
// вычисление площади прямоугольника

let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

let s = (Math.abs(x1 - x2)) * (Math.abs(y1 - y2));

console.log(s);

// округление чисел и их сравнение

let a = 13.890123;
let b = 2.891564;
let n = 3;

let d = Math.round(a % 1 * Math.pow(10, n));
let c = Math.round(b % 1 * Math.pow(10, n));

console.log(d, c);

console.log(d > c);
console.log(d < c);
console.log(d >= c);
console.log(d <= c);
console.log(d === c);
console.log(d !== c);

// сравнение рандомных чисел

let k = -3;
let m = 10;

let abs = Math.abs(m - k);

let random_number = Math.round(Math.random() * abs);

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


// 3 модуль
// проверка валидности пароля

let password = "dsss";

if ((password.includes('-') || password.includes('_')) && password.length >= 4) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
};

// регистр для Имени и Фамилии

let userName = 'Max';
let userSurname = 'Aaap';

let rightName = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
let rightSurname = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase();

let Name = userName !== rightName || userSurname !== rightSurname ? 'Имя было преобразовано' : 'Имя осталось без изменений';

console.log(rightName, rightSurname, Name);

// проверка четности и нечетности числа

let number = 7;

let check_number = (number % 2) === 0 ? 'Число чётное' : 'Число не чётное';

console.log( number, check_number);


