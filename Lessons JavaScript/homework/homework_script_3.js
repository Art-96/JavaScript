// Part one
const str = "test";
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello World";

console.log(logg.slice(6));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));

// The second part of

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched so far? ', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched so far? ', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i=0; i < 2; i++){
        const question_1 = prompt('One of the last movies you watched? ', ''),
                question_2 = prompt('How much would you rate it? ', '');
        
        if (question_1 != null && question_2 != null && question_1 != '' && question_2 != '' && question_1.length < 50){
            personalMovieDB.movies[question_1] = question_2;
            console.log('Done');
        }else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Quite a few movies watched');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You are a classic spectator');
    }else if(personalMovieDB.count >= 30){
        console.log('You are a movie fan');
    }else{
        console.log('An error has occurred');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// the third part

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is numbered ${i}`);
    }
}

writeYourGenres();
