/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания



let personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {

                personalMovieDb.movies[a] = b;
            } else {
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    }
};
