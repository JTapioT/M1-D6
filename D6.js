/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
  Create a variable called "test" and assign a string to it.
*/

let test = "here is a string";


/* Ex.B
  Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20;


/* Ex.C 
  Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 21);


/* Ex.D
  Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
  name: "Juha",
  surname: "Turpeinen",
  age: 32
}

/* Ex.E 
  Programmatically remove the age property from the previously create object.
*/

delete me.age;


/* Ex.F 
  Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = [
  "Javascript",
  "R"
];


/* Ex.G 
  Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop();


// JS Functions
/* Ex.1
  Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

let dice = function() {
  let diceNumbers = [1,2,3,4,5,6];

  let diceNumber = diceNumbers[Math.floor(Math.random() * 6)];
  return diceNumber;

  // Ultimate one-liner
  return [1,2,3,4,5,6][Math.floor(Math.random() * 6)];
}

// console.log(dice());


/* Ex.2 
  Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
// Assumption is that provided numbers are not negative numbers?

let whoIsBigger = function(num1, num2) {
  let result = num1 > num2 ? num1 : num2;
  return result;
}

// console.log(whoIsBigger(3,8));


/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

let splitMe = function(str) {
  let strAsArray = str.split(" ");
  return strAsArray;

  // One-liner:
  return str.split(" ");
}

// console.log(splitMe("I love coding"));


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
// is 'logical' good synonym for boolean?
let deleteOne = function(str, logical) {
  let result = logical ? str.slice(1) : str.slice(0,str.length-1);
  return result;
}

//console.log(deleteOne("Salmon", false));


/* Ex.5
Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

let onlyLetters = function(str) {
  let result = "";

  for(let i = 0; i < str.length; i++) {
    if (Number.isSafeInteger(parseInt(str[i]))) {
      continue;
    } else {
      result += str[i];
    }
  }

  return result;
}

// console.log("I have 4 dogs");


/* Ex.6 
  Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

// Couldn't figure out how to do this with the current material.
// Copy-pasted some RFC2822 compliant(?) regex.

// Recipient name - 64 characters max(?)
// Allowed:
  // A-Z, a-z
  // 0-9
  // Special characters allowed: ! # $ % & ' * + - / = ? ^ _ ` { |

// @ symbol

// Domain name - 253 characters max(?)
// Allowed:
  // A-Z,a-z
  // 0-9
  // A hyphen (-)
  // A period (.) - to identify sub-domain

// Top-level domain
  // Placed after the domain name in an email address.


let isThisAnEmail = function(str) {
  const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regEx.test(str.toLowerCase());
}

// console.log(isThisAnEmail("some.email@domain.com"));


/* Ex.7
  Write a function called "whatDayIsIt" that should return the current day of the week.
*/

let whatDayIsIt = function() {
  let date = new Date();
  let currentWeekDayNumber = date.getDay();
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[currentWeekDayNumber];
}

//console.log(whatDayIsIt());


/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

let rollTheDices = function(num) {
  let diceNumbers = [];
  let diceNumbersSum = 0;

  // Collect dice numbers from provided amount of dice rolls (num) to array
  // Also, sum together the dice numbers
  for(let i = 0; i < num; i++) {
    let diceNumber = dice();
    diceNumbers.push(diceNumber);
    diceNumbersSum += diceNumbers[i];
  }

  return {
    sum: diceNumbersSum,
    values: diceNumbers
  }
}

// console.log(rollTheDices(3));


/* Ex.9
  Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
// Works if assumed that date is written eg.
// "January 1, 1970"
// "8/16/2021"


let howManyDays = function(date) {
  // Seconds passed since January 1, 1970, UTC
  let passedSeconds = Math.floor(Date.now() / 1000);
  // The date provided, turned into seconds since January 1, 1970, UTC
  let passedSecondsByProvidedDate = Math.floor(Date.parse(date) / 1000);

  // Difference between now and provided date (seconds):
  let timeDifferenceInSeconds = passedSeconds - passedSecondsByProvidedDate;
  // Verbose step-by-step:
  // let timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
  // let timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
  // let timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);

  // Return number of days passed since the provided date.
  return Math.floor(timeDifferenceInSeconds / 60 / 60 / 24);
}
// console.log(howManyDays("14/8/2021"));
// console.log(howManyDays("August 8, 2021"));


/* Ex.10
  Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

let isTodayMyBirthday = function(date) {
  // Seconds passed since January 1, 1970 from now:
  let passedSeconds = Math.floor(Date.now() / 1000);

  // Seconds passed since January 1, 1970 from the provided date:
  let passedSecondsByProvidedDate = Math.floor(Date.parse(date) / 1000);

  // Days passed since January 1, 1970:
  let daysPassedNow = Math.floor(passedSeconds / 60 / 60 / 24);
  // Days passed since January 1, 1970 from the provided date:
  let daysPassedByProvidedDate = Math.ceil(
    passedSecondsByProvidedDate / 60 / 60 / 24
  );

  // Are the days passed from January 1, 1970 the same?
  if(daysPassedNow === daysPassedByProvidedDate) {
    return true;
  } else {
    return false;
  }
}

//console.log(isTodayMyBirthday("16/8/2021"));
//console.log(isTodayMyBirthday("August 16, 2021"));

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
  Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

let deleteProp = function(obj, str) {
  delete obj[str];
  return obj;
}


/* Ex.12 
  Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

let olderMovie = function(arr) {
  let oldestMovie = arr[0].Title;
  let oldestMovieYear = arr[0].Year;

  for(let i = 1; i < arr.length; i++) {
    if(oldestMovieYear > arr[i].Year) {
      oldestMovie = arr[i].Title;
    }
  }
  return oldestMovie;
}


/* Ex.13
  Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

let countMovies = function(arr) {
  return arr.length;
}

/* Ex.14
  Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

let onlyTheTitles = function(arr) {
  let movieTitles = [];

  for(let i = 0; i < arr.length; i++) {
    movieTitles.push(arr[i].Title);
  }

  return movieTitles;
}

/* Ex.15
  Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

let onlyInThisMillenium = function(arr) {
  let milleniumMovies = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].Year >= 2000) {
      milleniumMovies.push(arr[i]);
    }
  }

  return milleniumMovies;
}

/* Ex.16 
  Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

let getMovieById = function(id) {
  for(let i = 0; i < movies.length; i++) {
    if(movies[i].imdbID === id) {
      return movies[i];
    }
  }
}

/* Ex.17
  Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

let sumAllTheYears = function() {
  let yearsSummed = parseInt(movies[0].Year);

  for(let i = 1; i < movies.length; i++) {
    yearsSummed += parseInt(movies[i].Year);
  }

  return yearsSummed;
}

/* Ex.18
  Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/


let searchByTitle = function(str) {
  let result = [];

  for(let i = 0; i < movies.length; i++) {
    if(movies[i].Title.includes(str)) {
      result.push(movies[i]);
    }
  }

  return result;
}

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

let searchAndDivide = function(str) {
  let result = {
    match: [],
    unmatch: []
  }
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }
  return result;
}

/* Ex.20
  Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

let removeIndex = function(num) {
  movies.splice(num,1);
  return movies;
}

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

let halfTree = function(num) {
  let rowStars = "";

  for(let i = 0; i < num; i++) {
    rowStars += "*";
    console.log(rowStars);
    // Start the process again with for-loop...

    // More concise way?
    // Ignore the rowStars variable and just do this inside the loop:
    // But also change'<' to '<=' within condition inside the for-loop.
    // console.log('*'.repeat(i));
  }
}

//console.log(halfTree(3));

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

function tree(num) {
  let totalTreeWidth = 2 * num - 1; // nth odd number.
  let starInsertIndex = Math.floor(totalTreeWidth / 2);
  let starAmount = 1;
  let row = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < totalTreeWidth; j++) {
      if (j === starInsertIndex) {
        row += "*".repeat(starAmount);
        j += starAmount;
      } else {
        row += " ";
      }
    }
    row += "\n";
    starInsertIndex--;
    starAmount = starAmount + 2;
  }

  console.log(row);
}


console.time("start");
tree(8);
console.timeEnd("start");


/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

//console.log("EX12:");
//console.log(olderMovie(movies));

//console.log("EX13:");
//console.log(countMovies(movies));

//console.log("EX14:");
//console.log(onlyTheTitles(movies));

//console.log("EX15:");
//console.log(onlyInThisMillenium(movies));

//console.log("EX16:");
//console.log(getMovieById("tt4154796"));

//console.log("EX17:");
//console.log(sumAllTheYears());

//console.log("EX18:");
//console.log(searchByTitle("Lord"));

//console.log("EX19:");
//console.log(searchAndDivide("Lord"));

//console.log("EX20:");
//console.log(removeIndex(0));