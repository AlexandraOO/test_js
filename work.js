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

console.log(reverse('Лето'));

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

//перемешивание массива чисел и  поиск индекса (порядкового номера) нужного элемента в массиве.

let arr = [];
let countt = 5;
let g, temp;
let k = 3;

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

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];

arr1.push(... arr2);

console.log(arr1);

// 5 modul
// вывод количества лет от текущей даты

function getAge(age) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return currentYear - age;
}

console.log(getAge('2000'));


// создание массива email-адресов, не попавших в чёрный список

let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = ['jsfunc@mail.ru','goodday@day.ru'];

function filter(whiteList, blackList) {
    let filterlist = [];

    for (let f = 0; f < whiteList.length; f++) {
        if (!blackList.includes(whiteList[f])) {
            filterlist.push(whiteList[f]);
        };
    };
    return filterlist;
};

let newlist = filter(whiteList, blackList);

console.log(newlist);

// отсортированный массив через функцию

let arrS = [12, 31, 3, 45, 100];

function arrSort(arrS, func) {
    let result = [...arrS];

    for (q = 0; q < result.length; q++) {
        for (let y = 0; y < result.length - 1; y++) {
            if (func(result[y], result[y + 1])) {
                let tem = result[y];
                result[y] = result[y + 1];
                result[y + 1] = tem;
            };
        };
    };
    return result;
};

console.log('До', arrS)
console.log('После', arrSort(arrS, function(A, B){
    return A > B;
}));