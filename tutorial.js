// let lang = "en";
// let arr;
// const daysRu = "пн, вт, ср, чт, пт, сб, вс";
// const daysEn = "mn, ts, wd, th, fr, st, sn";

// switch (lang) {
//   case "ru":
//     arr = daysRu;
//     break;
//   case "en":
//     arr = daysEn;
//     break;
//   default:
//     arr = daysEn;
// }
// console.log(arr);

// Пользователь вводит диапазон нужно вывести на экран все простые числа из этого диапазона. Простыми числами называются числа, которые имеют всего 2 делителя, то есть
// делятся только на 1 и на самого себя!

// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в
// результате выдаёт сумму всех нечетных чисел в этом диапазоне.

// const start = 0;

// const end = 10;
// let total = 0;

// for (let i = start; i <= end; i += 1) {
//   if (i % 2 !== 0) {
//     // console.log(i);
//     total += i;
//   }
// }
// console.log(total);

/*4. Дано произвольное целое число n. Написать программу, которая
разбивает число n на цифры и выводит их на экран;
подсчитывает сколько цифр в числе n;
находит сумму цифр числа n;
меняет порядок цифр числа n на обратный.
Пример: ввожу число 123
цифр в числе = 3
сумма = 6(это значение получили следующим образом 1+2+3)
обратный порядок = 321
*/

// const n = 123;
// let total = 0;
// let totalResult = "";

// const nStr = n.toString();
// console.log(nStr);

// for (let i = 0; i < nStr.length; i += 1) {
//   console.log(nStr[i]);
// }
// console.log("цифр в числе =", nStr.length);

// for (let i = 0; i < nStr.length; i += 1) {
//   total += Number(nStr[i]);
// }
// console.log("Total:", total);

// for (let i = nStr.length - 1; i >= 0; i -= 1) {
//   console.log(typeof nStr[i]);

//   totalResult += nStr[i];
// }
// console.log(totalResult);
/*7. Требуется написать код, который выводит в консоль числа от 1 до n, 
где n — это целое число, с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/

// const n = 25;

// for (let i = 1; i <= n; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

/*8. Нужно написать скрипт, который проверяет, являются ли 
две строки анаграммами, причем регистр букв не имеет значения.
 Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.*/

let word1 = "Ярик зачем ты так";
let word2 = "Киря чезам ты кат";
let message = "";

word1 = word1.toLocaleLowerCase();
word2 = word2.toLocaleLowerCase();

if (word1.length !== word2.length) {
  message = "не анаграмма";
} else {
  for (let i = 0; i <= word1.length - 1; i += 1) {
    if (word2.includes(word1[i])) {
      let newWord2 = "";
      for (let j = 0; j <= word2.length - 1; j += 1) {
        if (word2[j] === word1[i]) {
          newWord2 = newWord2 + word2.slice(j + 1);
          break;
        }
        newWord2 += word2[j];
      }
      word2 = newWord2;
    } else {
      message = "не анаграмма";
      break;
    }
    if (word2 === "") {
      message = "анаграмма";
    }
  }
}
console.log(message);
