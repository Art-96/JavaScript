const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

    start: function () {
        personalMovieDB.count = +prompt('How many films have you watched so far? ', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you watched so far? ', '');
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10){
            console.log('Quite a few movies watched');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('You are a classic spectator');
        }else if(personalMovieDB.count >= 30){
            console.log('You are a movie fan');
        }else{
            console.log('An error has occurred');
        }
    },    

    showMyDB: function (hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (this.privat){
            this.privat = false
        } else {
            this.privat = true
        }
    },

    writeYourGenres : function () {
        for(let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre is numbered ${i}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - this is ${item}`);
        });
    }
};

