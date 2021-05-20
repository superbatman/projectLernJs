'use strict';

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start(){
     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
     }
}
start();

const personalMovieDB = {
    count: numberOfFilms,// сюда передается ответ на первый вопрос
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyfilms() {
    for (let i = 0; i < 2;i++){
        const a  = prompt('Один из последних просмотренных фильмов?',''),
              b =  prompt('На сколько оцените его?','');

         if (a != null && b!= null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else {
            console.log('error');
            i--;
         }
    }
}

//rememberMyfilms();

function detectPersanalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >=30) {
        console.log('Вы киноман');
    } else  {
        console.log('Произошла ошибка');
    }
}

//detectPersanalLevel();

function detectPrivat() {
    console.log(!personalMovieDB.privat ? personalMovieDB:"true");
}
detectPrivat();

function writeYourGenres() {
    for(let i = 1;i<4;i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}:`);
    }
    return personalMovieDB.genres;
}
console.log(writeYourGenres());




//callback-функции
function first(){
    setTimeout( function() {
        console.log(1); //после задержки в 500 милисекунд в консоль выведется 1
    },500);
}

function second() {
    console.log(2);
}
//first();
//second();

function learnJs(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

learnJs('JavaScript', function (){ // здесь анонимная функция, уничтожается после использования
    console.log("Я прошел этот урок");
});

// а можно вот так
function done (){
    console.log("Я прошел этот урок");
}
//learnJs('JavaScript',done); //здесь уже скобки у функции не пишутся


/*Массивы */

const arr = [67,23,12,35,5,6,45,8,9,10];

arr.pop(10); //удаление последнего элемента
arr.push(12); // добавление нового элемента в конце

console.log(arr);

//перебор элементов массива
for (let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

for (let key of arr){ //объект таким образом не перебрать
    console.log(key);
}
//ЗАПОМНИТЬ такую конструкцию
arr.forEach(function(item, i, arr){ //вызванная функция будет выполняться для каждого эл-та мас-ва
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

function compareNum(a,b){
    return a-b;
}
console.log(arr.sort(compareNum));


/*function ShowSomthinhInLog(text){
    console.log('object :>> ', text);
}
ShowSomthinhInLog(prompt('Сколько вам лет?',''));

function calc(a,b){
    return (a+b);
}
console.log(calc(5,10));

const logger = function (){
    let a = 6+5;
    console.log(a);
};
logger();

const calc2 = (a, b) => a + b; //с ссылочные функции не имеют контекста вызова и чаще всего используются в обработчиках
const calc3 = (a, b) => { console.log("1"); return a + b;};

const str = "test some Fruit";
console.log(str.slice(-5,-1));
 const num = 2.2;
 console.log(Math.round(num));
 const test = "12px";
 console.log(parseInt(test));*/