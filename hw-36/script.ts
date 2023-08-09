interface IMovie {
    id: number;
    title: string;
    year: number;
    released: string;
    runtime: string;
    genre: string[];
    director: string;
    writer: string;
    actors: string[];
    plot: string;
    country: string;
    poster: string;
    imdbRating: number;
    imdbVotes: number;
    type: string;
    boxOffice: string;
    production: string;
}

const movies: Array<IMovie> = [
    {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster: "https://m.media-amazon.com/images/M/MVGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
},
    {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
},
    {
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot",
    country: "United States, United Kingdom",
    poster: "https://m.media-amazon.com/images/MkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
},
    { 
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts.",
    country: "United Kingdom",
    poster: "https://m.media-amazon.com/images/M/MV5BwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    type: "movie",
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
}, 
    {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    type: "movie",
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, Warner Brothers",
}
]

// C массивом фильмов сделать следующий задачи, используя map/reduce вместо for, forEach:

// 1. Собрать в массив все жанры фильмов (без повторения)
const allGenres: string[] = movies.map((movies) => movies.genre).reduce((previous,current) => previous.concat(current), []).reduce((acc: string[], genre) => {
    if (!acc.includes(genre)) {
        acc.push(genre);
    }
    return acc
}, []);
console.log(allGenres);


// 2. Собрать в массив всех актеров всех фильмов (без повторения)
const allActors = movies.map((movies) => movies.actors).reduce((acc, crr) => [...acc, ...crr], []).reduce((acc: string[], actor) => {
    if(!acc.includes(actor)) {
        acc.push(actor);
    }
    return acc
}, []);
console.log(allActors);


// 3. Отсортировать фильмы по рейтингу по убыванию
const sortMovieRating = movies.sort(({imdbRating: a}, {imdbRating: b}) => b - a);
console.log(sortMovieRating);


// 4. Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot
const newArrMovies = movies.map(({id, title, released, plot}) => { return {id, title, released, plot}});
console.log(newArrMovies);


// 5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами где число равно году выхода фильма.
const getMovieByYear = (movies: Array<IMovie>, desiredYear: number): Array<IMovie> => {
    return movies.map((movie) => movie).reduce((acc: Array<IMovie>, movie) => {
        if (movie.year === desiredYear) {
            acc.push(movie);
        }
        return acc;
    }, []);
}
console.log(getMovieByYear(movies,2021));


// 6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в название фильма.
const getMovieByTitle = (movies: Array<IMovie>, desiredTitle: string): Array<IMovie> => {
    return movies.map((movie) => movie).reduce((acc: Array<IMovie>, movie) => {
        if (movie.title === desiredTitle) {
            acc.push(movie);
        }
        return acc
    }, [])
}
console.log(getMovieByTitle(movies, "Harry Potter and the Half-Blood Prince"));


// 7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами где строка входит в название фильма или в его сюжет.
const getMovieByTitleOrPlot = (movies: Array<IMovie>, desiredTitle: string): Array<IMovie> => {
    return movies.map((movie) => movie).reduce((acc: Array<IMovie>, movie) => {
        if (movie.title === desiredTitle || movie.plot === desiredTitle) {
            acc.push(movie);
        }
        return acc
    }, [])
}
console.log(getMovieByTitleOrPlot(movies, "An orphaned boy enrolls in a school of wizardry."));


// 8. Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов , 2) строка(название поля, например 'title') и строку/число(значение поля "Black Widow"). А результатом этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма. Например: передаем (films, 'title', 'Black Widow') и на выходе получаем фильм с id=1 если передаем (films, 'year', 2011) , то получаем фильм с id=2
const getMovieByKeyValue = (movies: Array<IMovie>, key: string, value: string | number | string[]): Array<IMovie> => {
    return movies.map((movie) => movie).reduce((acc: Array<IMovie>, movie) => {
        if (key in movie) {
            if((movie[key as keyof IMovie]) === value) {
                acc.push(movie)
            }
        }
        return acc
    }, [])
}
console.log(getMovieByKeyValue(movies, "year", 2021));