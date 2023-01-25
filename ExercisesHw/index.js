console.log("Connected");
//EXERCISE 1
function itemInArray() {
    let arrayWithItems = ["Name", 24, true,];

    let index = arrayWithItems.indexOf(24);
    console.log(index)
}

itemInArray();

//EXERCISE 2
function exerciseTwo(arrOfnumber){
    let numbers = [];
    for(let i = 0; i < arrOfnumber.length; i--){
        if(i % 2 === 0){
            numbers.push(arrOfnumber[i])

        }
        // console.log(numbers)
    }
    console.log(numbers)

}
exerciseTwo([3, 4, 55, 6])

function exerciseTwo(arrOfnumber) {
    for (let i = 0; i < arrOfnumber.length; i++) {
        if ((i + 1) % 2 == 1) {
            arrOfnumber[i]++;
        } else {
            arrOfnumber[i]--;
        }

    }
    console.log(arrOfnumber)

}
exerciseTwo(23, 45, 2, 3)



function updateArr() {
    let arrOfnumber = [3, 458, 88, 2, 5]
    console.log(`This is the numbers array ${arrOfnumber}`);
    for (let i = 0; i < arrOfnumber.length; i++)
        if ((i + 1) % 2 == 1) {
            arrOfnumber[i]++;
        } else {
            arrOfnumber[i]--;
        }

    let updateArr = [];

    updateArr.push(arrOfnumber)

    if (updateArr == "") {
        console.log(false) 
    }else{
    console.log(`This is updated array of numbers ${updateArr}`)
    }
}
updateArr();



//EXERCISE 3
let students = [];

function printingStudents(parameter) {
    let passedStudents = [];



    students[0] = {
        studentName: "Bob", 
        studentLastname: "Bobski",
        studentGrades: [10, 10, 10, 10, 7, 9, 6, 10, 6, 9]
    }

    let bobsAverageScore = (10 + 10 + 10 + 10 + 7 + 9 + 6 + 10 + 6 + 9) / 10
    console.log("bobs Average score is:", bobsAverageScore)
    
    students[1] = {
        studentName: "Slave", 
        studentLastname: "Pejkov",
        studentGrades: [8, 10, 7, 10, 7, 9, 8, 10, 5, 9]
    }
    let slavesAverageScore = (8 + 10 + 7 + 10 + 7 + 9 + 8 + 10 + 5 + 9) / 10
    console.log("Slaves Average scores is ", slavesAverageScore)
    students[2] = {
        studentName: "John", 
        studentLastname: "Doe",
        studentGrades: [8, 7, 10, 6, 7, 9, 6, 10, 6, 9]
    }
    let johnsAverageScore = (8 + 7 + 10 + 6 + 7 + 9 + 6 + 10 + 6 + 9) / 10
    console.log("Johns Average score is", johnsAverageScore)

    if(bobsAverageScore >= 8){
      passedStudents.push(students[0])
    }

    if(slavesAverageScore >= 8){
      passedStudents.push(students[1])
        
    }

    if(johnsAverageScore >= 8){
        passedStudents.push(students[2])
    }
      console.log("Students that have passed are:", passedStudents)
}
printingStudents(students)

//EXERCISE 4    

let movieName = document.getElementById("movieName");
let movieDirector = document.getElementById("movieDirector");
let movieGenre = document.getElementById("movieGenre");
let movieCoverImg = document.getElementById("movieCoverImg");
let movieReleaseDate = document.getElementById("movieReleaseDate");

let buttons = document.getElementsByTagName("button");
let results = document.getElementById("results");

let addBtn = buttons[0];

let id = 0;

let idToEdit = null;

function generateId(){
  id += 1;
  return id
}

function Movie(id, movieName, movieDirector, movieGenre, movieCoverImage, movieReleaseDate){
  this.id = id;
  this.movieName = movieName;
  this.movieDirector = movieDirector;
  this.movieGenre = movieGenre;
  this.movieCoverImg = movieCoverImage;
  this.movieReleaseData = movieReleaseDate;
}

let moviesDB = [];

addBtn.addEventListener("click", function(event) {
  event.preventDefault()
  
  let doWeEditMovie = false; 

  for(let movie of moviesDB){
    if(movie.id === idToEdit){
      movie.movieName = movieName.value;
      movie.movieDirector = movieDirector.value;
      movie.movieGenre = movieGenre.value;
      movie.movieCoverImg = movieCoverImg.value;
      movie.movieReleaseData = movieReleaseDate.value;

      doWeEditMovie = true;
    }
  }

  if(doWeEditMovie === false){ 
    let movie = new Movie(generateId(), movieName.value, movieDirector.value, movieGenre.value, movieCoverImg.value, movieReleaseDate.value);
    moviesDB.push(movie);
  }
 
  

  printMovies(moviesDB, results)
  clearInputs();

  idToEdit = null;
})

function printMovies(movies, elementToPrintIn){
  elementToPrintIn.innerHTML = "";

  for(let i = 0; i < movies.length; i++){
    console.log(movies[i]) 
    elementToPrintIn.innerHTML += 
    `
      <div class="movieCard">
          <h3>${movies[i].movieName}</h3>
          <img width="300" height="350" src="${movies[i].movieCoverImg}" alt=${movies[i].movieName} />
          <button value="${movies[i].id}" onclick="removeFromList(this, moviesDB)"> Remove Movie </button>
          <button value="${movies[i].id}" onclick="editFromList(this, moviesDB)"> Edit Movie </button>
      </div>
    `

  }
}

function removeFromList(target,  movies){
  console.log("I am clicked")
  console.log(target)
  console.log(movies)
  
  let listOfRemaningMovies = [];
  
  for(let i = 0; i < movies.length; i++){
    if(movies[i].id !== Number(target.value)){
      listOfRemaningMovies.push(movies[i])
    }
  }

  console.log("Remaining: ", listOfRemaningMovies)
  moviesDB = listOfRemaningMovies;
  printMovies(moviesDB, results);

}

function editFromList(target,  movies){
 
  let movieTobeEdited = {};
  
  for(let i = 0; i < movies.length; i++){
    if(movies[i].id === Number(target.value)){
      movieTobeEdited = movies[i]
    }
  }


  
  movieName.value = movieTobeEdited.movieName
  movieDirector.value = movieTobeEdited.movieDirector
  movieGenre.value = movieTobeEdited.movieGenre
  movieCoverImg.value = movieTobeEdited.movieCoverImg
  movieReleaseDate.value = movieTobeEdited.movieReleaseData
  idToEdit = movieTobeEdited.id

}

function clearInputs(){
  movieName.value = ""
  movieDirector.value = ""
  movieGenre.value = ""
  movieCoverImg.value = ""
  movieReleaseDate.value = ""
}