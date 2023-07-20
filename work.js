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

// задача о boolean, массивах и циклах

let roadMines = [false, false, false, true, false, false, false, true, false, false];
let road = 2;

for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] == true) {
        road -= 1;
        if (road == 1) {
            i + 1;
            console.log(`танк поврежден`);
        } else if (road == 0) {
            console.log(`танк уничтожен`);
            break;
        };         
    } else {
        console.log(`Танк переместился на ${i + 1}`);
    };
};

// Календарь 

// let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// let day = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']; // 0 - 6
// let number = 0; 



// for (number of month) {
//     if (number <= month.length, number++) {
//         k = 0, k >= day.length, k++;
//         number = month[0] + 1;
//         console.log(`${number} января, ${day[i]}`); 
        
//     };
// };


// вывод в консоль:
// 1 января, вторник
// 2 января, среда


//перемешивание массива чисел и  поиск индекса (порядкового номера) нужного элемента в массиве.

let arr = [];
let countt = 5;
let g, temp;
let k = 2;

for (let j = 1; j <= countt; j++) {
    arr.push(j);
}

for (let h = arr.length - 1; h > 0; h--) {
    g = Math.floor(Math.random()*(h + 1));
    temp = arr[g];
    arr[g] = arr[h];
    arr[h] = temp;
}
console.log(arr);

if (k <= countt) {
    console.log(`индекс элемента = ${arr.indexOf(k)}`)
} else {
    console.log('Элемент не найден')
}


// Научиться обрабатывать массивы одним циклом

