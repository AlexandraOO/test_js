// 4 modul
//  генератор массивов длиной count со случайными числами от n до m

let mas = [];
let n = 2;
let m = 5; 
let count = 50;

for (let i = 0; i < count; i++) {
    mas.push(Math.round(Math.random() * (m - n) + n));
}

console.log(mas);


// создание перевернутой строки с помощью цикла

function reverse(str){
let text = ' ';
 
for(let i = str.length - 1; i >= 0; i--){
    text += str[i];
};
return text;
};

console.log(reverse('Арбуз'));