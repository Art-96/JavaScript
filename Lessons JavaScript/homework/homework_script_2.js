// Version 1


let numberOfFilms = +prompt('How many films have you watched so far? ', '');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

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

if (personalMovieDB.count < 10){
    console.log('Quite a few movies watched');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You are a classic spectator');
}else if(personalMovieDB.count >= 30){
    console.log('You are a movie fan');
}else{
    console.log('An error has occurred');
}

console.log(personalMovieDB);


// Version 2
/*
let numberOfFilms = +prompt('How many films have you watched so far? ', '');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let i = 0;
while(i < 2){
    let question_1 = prompt('One of the last movies you watched? ', ''),
            question_2 = prompt('How much would you rate it? ', '');
        
    if(question_1 != null && question_2 != null && question_1 != '' && question_2 != '' && question_1.length < 50){
        personalMovieDB.movies[question_1] = question_2;
        console.log('Done');
        i++;
    }else {
        console.log('Error');
        i--;
    }
}


if(personalMovieDB.count < 10){
    console.log('Quite a few movies watched');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You are a classic spectator');
}else if(personalMovieDB.count >= 30){
    console.log('You are a movie fan');
}else{
    console.log('An error has occurred');
}


console.log(personalMovieDB);
*/