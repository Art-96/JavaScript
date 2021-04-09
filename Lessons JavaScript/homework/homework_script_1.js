let numberOfFilms = +prompt('How many films have you watched so far? ', '');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let question_1 = prompt('One of the last movies you watched? ', ''),
    question_2 = prompt('How much would you rate it? ', ''),
    question_3 = prompt('One of the last movies you watched? ', ''),
    question_4 = prompt('How much would you rate it? ', '');

personalMovieDB.movies[question_1] = question_2;
personalMovieDB.movies[question_3] = question_4;

console.log(personalMovieDB);