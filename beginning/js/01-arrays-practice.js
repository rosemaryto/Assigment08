//STEP 1
// let arrMovies = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola"];
// console.log(arrMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Clueless";
// movies[1] = "Point Break";
// movies[2] = "Speed";
// movies[3] = "The Mummy";
// movies[4] = "Enola";
// console.log(movies[0]);


//STEP 3
// let movies = new Array(5);
// movies[0] = "Clueless";
// movies[1] = "Point Break";
// movies[2] = "Moxie";
// movies[3] = "Speed";
// movies[4] = "The Mummy";
// movies[5] = "Enola";
// console.log(movies.length);

//STEP 4
// let movies = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola"];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// for (movie in movies) {
//     console.log(movies[movie]);
// }

//STEP 6
// const movies = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// for (const movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// for (movie in movies) {
//     console.log(movies.sort()[movie]);
// }

//STEP 8
// let movies = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// let leastFavMovies = ["The Flinstones", "What Lies Below", "Magic Mike"];
// console.log("Movies I like:");
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i] + "\n");
// }
// console.log("Movies I regret watching:");
// for (let i = 0; i < leastFavMovies.length; i++) {
//     console.log(leastFavMovies[i] + "\n");
// }


//STEP 9
// let moviess = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// let leastFavMovies = ["The Flinstones", "What Lies Below", "Magic Mike"];
// movies = moviess.concat(leastFavMovies);
// movies.reverse();
// console.log(movies.toString());

//STEP 10
// let moviess = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// let leastFavMovies = ["The Flinstones", "What Lies Below", "Magic Mike"];
// movies = moviess.concat(leastFavMovies);
// movies.reverse();
// console.log(movies.toString());
// console.log(movies[9]);

//STEP 11
// let moviess = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// let leastFavMovies = ["The Flinstones", "What Lies Below", "Magic Mike"];
// movies = moviess.concat(leastFavMovies);
// movies.reverse();
// console.log(movies.toString());
// console.log(movies[0]);

//STEP 12
// let moviess = ["Clueless", "Point Break", "Speed", "The Mummy", "Enola", "Moxie", "The Matrix"];
// let leastFavMovies = ["The Flinstones", "What Lies Below", "Magic Mike"];
// movies = moviess.concat(leastFavMovies);
// console.log(movies.toString());
// console.log(movies.indexOf("The Flinstones"));
// console.log(movies.indexOf("What Lies Below"));
// movies.splice(7,8, "Palm Trees in the Snow", "L'arnacoeur");
// console.log(movies.toString());

// //STEP 13
// let moviess = [
//     ["Clueless", 1], 
//     ["Point Break", 2],
//     ["Speed", 3],
//     ["The Mummy", 4],
//     ["Enola", 5]
// ];

// for (let movie of moviess) {
//     console.log(`${movie[0]}`);
// }



//STEP 14
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

function showEmployee () {
    console.log("EMPLOYEES:")
    console.log("");
    for (let i = 0; i < employees.length; i++) {
        
        console.log(employees[i]); 
}
}
showEmployee();

//STEP 15
// let randStuff = [58, "", 'abcd', "true", null, false, 0];
// var unWanted = randStuff.filter( function (item) {
//     "use strict";
//     return typeof item !== null && item !== false && item !== 0;
// });
// console.log(unWanted.toString());


//STEP 16
// var apple = [1, 3, 4, 6, 7, 90, 80, 600, 94, 13];
// const randNum = apple[Math.floor(Math.random() * apple.length)];
// console.log(randNum);

//STEP 17
// var arr = [1, 2, 3];
// var maxNum = Math.max.apply(0, arr);
// console.log(maxNum);


