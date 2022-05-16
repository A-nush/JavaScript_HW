// 1. Создать переменную “item_1”
// 2. Присвоить переменной item_1 цифру 5.
// 3. Вывести в консоль item_1.
let item_1 = 5;
console.log(item_1)

// 4. Создать переменную “item_2”
// 5. Присвоить переменной item_2 цифру 3.
// 6. Вывести в консоль item_2.
let item_2 = 3;
console.log(item_2)

// 7. Создать переменную “item_3”
// 8. Присвоить переменной item_3 сложение item_1 и item_2.
// 9. Вывести в консоль item_3.
let item_3 = item_1 + item_2;
console.log(item_3)

// 10. Создать переменную “item_4”
// 11. Присвоить переменной item_4 строку “Yolochka”
// 12. Вывести в консоль item_4.
let item_4 = "yolochka";
console.log(item_4)

// 13. Вывести в консоль сложение item_3 и item_4.
let result_1 = item_3 + item_4;
console.log(result_1)

// 14. Вывести в консоль умножение item_3 и item_4.
let result_2 = item_3 * item_4;
console.log(result_2)

// 15. Создать переменную “item_5”
// 16. Присвоить переменной item_5 переменную item_3
let item_5 = item_3;
console.log(item_5)

// 17. Создать переменную item_6.
// 18. Создать переменную item_6_type
// 19. Присвоить переменной item_6 значение 15
// 20. Присвоить переменной item_6_type тип переменной item_6
let item_6 = 15;
let item_6_type = typeof(item_6);
console.log(typeof item_6)
console.log(typeof item_6_type)

// 21. Вывести в консоль тип данных item_6 в виде ——  
// “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log("item_6 == " + typeof item_6)
console.log("item_6_type == " + typeof item_6_type)

// 22. Создать переменную item_7 и в ней преобразовать item_6 в String.
// 23. Создать переменную item_7_type
let item_7 = String(item_6);
console.log(typeof item_7)

// 24. Присвоить переменной item_7_type тип переменной item_7
// 25. Вывести в консоль тип данных item_7 в виде 
//  ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
let item_7_type = typeof(item_7);
console.log("item_6 == " + typeof item_6)
console.log("item_6_type == " + typeof item_6_type)

// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

// 29. Создать if в котором будeте проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.

// if (age_1 < age_2) {
// console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2);
// } else if (age_1 >= age_2) {
//     console.log("Welcome!");
// } else if (age_1 < age_3) {
//     console.log("Welcome!");
// } else if (age_1 > age_3) {
//     console.log("Keep calm and look Culturу channel");
// } else {
//     console.log("Technical work");
// }

console.log("===================")
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function(age) {

//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " It's less then " + age_2);
//         } else if (age >= age_2) {
//             console.log("Welcome!");
//         } else if (age < age_3) {
//             console.log("Welcome!");
//         } else if (age > age_3) {
//             console.log("Keep calm and look Culturу channel");
//         } else {
//             console.log("Technical work");
//         }
// }
// checkAge(17);
// checkAge(18);  
// checkAge(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

// const checkAge = function(age) {
// if (typeof age == "number") {
//     if (age < age_2) {
//         console.log("You don't have access cause your age is " + age + " It's less then " + age_2);
//         } else if (age >= age_2) {
//             console.log("Welcome!");
//         } else if (age < age_3) {
//             console.log("Welcome!");
//         } else if (age > age_3) {
//             console.log("Keep calm and look Culturу channel");
//         } else {
//             console.log("Technical work");
//         }
// } else {console.log("Error!")}
// }

// checkAge(17);
// checkAge("test");

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// const checkAge = function(age) {
//     if (+age) {
//         if (age < age_2) {
//             console.log("You don't have access cause your age is " + age + " It's less then " + age_2);
//             } else if (age >= age_2) {
//                 console.log("Welcome!");
//             } else if (age < age_3) {
//                 console.log("Welcome!");
//             } else if (age > age_3) {
//                 console.log("Keep calm and look Culturу channel");
//             } else {
//                 console.log("Technical work");
//             }
//     } else {console.log("Error!")}
//     }
    
//     checkAge(17);
//     checkAge("25");
//     checkAge("25sss");

//     4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

    // let agePrompt = prompt("Enter age")
    // checkAge(agePrompt)

    console.log("===================")

    // JS. HW_2
    // Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let minstring = true
let maxstring = true
let word = true
let letters = true
let uppercase = true
let numbers = true
let fillin = true

function validation(string_check) {
    if (typeof string_check == "string")
    {
        if (string_check.length < 5)
        {console.log("string < 5")}
        else {minstring = true}
        if (string_check.length > 64)
        {console.log("string_check > 64")}
        else {maxstring = true}
        if (string_check.includes("@"))
        {word = true}
        else {console.log("add @")}
        if (/[A-Za-zA-Яа-я]/.test(string_check))
        {letters = true}
        else {console.log("add letters")}
        if (/[A-ZA-Я]/.test(string_check))
        {uppercase = true}
        else {console.log("add uppercase letters")}
        if (/[0-9]/.test(string_check))
        {numbers = true}
        else {console.log("add numbers")}
        if(!string_check)
        {console.log("type something")}
        else {fillin = true}
        if (minstring && maxstring && word && letters && uppercase && numbers && fillin)
        {console.log("string - OK")}

    }
    else
    {console.log("it isn't string")}
}

validation("3")