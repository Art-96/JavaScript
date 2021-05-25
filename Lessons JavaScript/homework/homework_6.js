document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const movieList = document.querySelector('.promo__interactive-list'),
        adv = document.querySelectorAll('.promo__adv img'),
        addform = document.querySelector('form.add'),
        addinput = addform.querySelector('.adding__input'),
        checkbox = addform.querySelector('[type="checkbox"]');

    addform.addEventListener('submit', (event) => {
        event.preventDefault();

        let newfilm = addinput.value;
        const favorite = checkbox.checked;

        if (newfilm) {

            if (newfilm.length > 21) {
                newfilm = `${newfilm.substring(0, 21)}...`;
            }
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newfilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => { item.remove(); });
    };

    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = "драма";
        document.querySelector(".promo__bg").style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});
