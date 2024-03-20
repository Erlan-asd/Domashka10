// Скидываем также репозиторием!

// Задание 1
// Напишите функцию, которая найдёт сумму квадратных корней элементов массива и округлит её до двух знаков после запятой
// [1,2,3,4,5] --> 8.382332347441762 --> 8.38

//  Решение:

// let arr = [1,2,3,4,5];

// function sumSquareRoots(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//        if (typeof element === 'number' && !isNaN(element)) {
//             sum += Math.sqrt(element);
//         }
//     });
//     sum = Math.round(sum * 100) / 100;
//     return sum;
// }

// const result = sumSquareRoots(arr); 
// console.log(result); 


// Задание 2
// Напишите функцию на проверку если ли в массиве есть два одинаковых элемента подряд.
// [1, 2, 3, 3, 4, 5] --> true
// [1,2,3] --> false
// ['hello', 'my', 'my', 'friend'] --> true

//  Решение:

// function findDouble(arr) {
//       for (let i = 1; i < arr.length; i++) {
//           if (arr[i] === arr[i - 1]) {
//             return true;
//         }
//     }
//      return false;
// }

// let arr2 = [1, 2, 3, 3, 4, 5]; // true
// let arr3 = [1, 2, 3, 4, 5, 6]; // false
// let arr4 = ['hello', 'my', 'my', 'friend'] // true

// let result = findDouble(arr3);
// console.log(result);


// Задание 3
// Напишите функцию, которая принимает в себя строку и посчитает сколько в ней гласных букв.
// В строке будут только русские слова.
// Гласных букв - десять: а, у, о, и, э, ы, я, ю, е, ё
// 'привет' --> 2

//  Решение:

// function countVowels(str) {
//     const vowelRegex = /[ауоиэыяюеё]/gi;
//     const matches = str.match(vowelRegex);
//     return matches ? matches.length : 0;
// }

// const str2 = "Привет, мир!";
// const sum = countVowels(str2);
// console.log(sum);

// Задание 4(дополнительно)
// Напишите функцию, которая реализует функциональность метода filter. Функция принимает массив и callback.
// Например если мы фильтруем массив на чётные числа c помощью filter так:
// const arr = [1, 2, 3, 4, 5] 
// arr.filter(el => el % 2 === 0) --> [2, 4]
// То наша функция должна делать то же самое:
// bizdinFilter(arr, callback) --> [2, 4]


//  Решение:


function bizdinFilter(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const arr = [1, 2, 3, 4, 5];

function isEven(num) {
    return num % 2 === 0;
}

const filteredArr = bizdinFilter(arr, isEven);
console.log(filteredArr);