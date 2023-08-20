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

// 6 modul 
// Вычисление старшего пользователя 

let user1 = {
    name: 'Игорь',
    age: 17
};

let user2 = {
    name: 'Оля',
    age: 21
};

let user3 = {
    name: 'Глаша',
    age: 15
};
     
// let min = Math.min(user1.age, user2.age, user3.age);  //17
let max = Math.max(user1.age, user2.age, user3.age); //21
      
function getOlderUser(user1, user2, user3) {

    if (user1.age == max) {
        return user1.name
    }; 
    if (user2.age == max) {
        return user2.name
    } else (user3.age == max) 
        return user3.name
};       

let res = getOlderUser(user1, user2, user3);

console.log(max, res);

// Вычисление младшего пользователя 

let allUsers = [
    {name: 'Валя', ag: 11},
    {name: 'Таня', ag: 24},
    {name: 'Рома', ag: 21},
    {name: 'Надя', ag: 34},
    {name: 'Антон', ag: 7}
];

let min = Math.min(...allUsers.map(item => item.ag));
  
function getOlderUserArray() {
    let YoungUser = [];
    let copy = [... allUsers];

    for (user of copy) {
        if (user.ag == min) {
            YoungUser.push(user);
        };
    };
    return YoungUser; 
};

let resul = getOlderUserArray(allUsers);

console.log(resul);

// Фильтрация массива объектов по значению свойства

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Иван', surname: 'Васильев' },
    { name: 'Иван', surname: 'Петров' },
    { name: 'Василий', surname: 'Иванов' },
];

// item = object.name
function filterObjects(item) {
    let filterName = [];
    let copyObject = [...objects];

    for (item of copyObject) {
        if (item.name.includes('Иван')) {
            filterName.push(item);
        };
    };
    return filterName;
};

let results = filterObjects(objects, 'name', 'Иван');

console.log(results);