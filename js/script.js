/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

/*let number = 5;
let _number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a:50
}
obj.a = 10;
console.log(obj);
console.log(name);
var name = 'ivan';*/
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

console.log(`столько: ${numberOfFilms}`);
const personalMovieDB = {
    count: numberOfFilms,// сюда передается ответ на первый вопрос
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a  = prompt('Один из последних просмотренных фильмов?',''),
    b =  prompt('На сколько оцените его?',''),
    c  = prompt('Один из последних просмотренных фильмов?',''),
    d =  prompt('На сколько оцените его?','');
  /*  Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }*/
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);