let favMovies = [
  {
    id: "0",
    title: "thupaki",
    releaseDate: "2014",
  },
  {
    id: "1",
    title: "veeram",
    releaseDate: "2019",
  },
  {
    id: "2",
    title: "jailer",
    releaseDate: "2023",
  },
  {
    id: "3",
    title: "jawaan",
    releaseDate: "2019",
  },
  {
    id: "4",
    title: "DD returns",
    releaseDate: "2019",
  },
  {
    id: "5",
    title: "enthiran",
    releaseDate: "2010",
  },
  {
    id: "6",
    title: "vikram",
    releaseDate: "2020",
  },
  {
    id: "7",
    title: "don",
    releaseDate: "2022",
  },
  {
    id: "8",
    title: "varuthpadatha valibar sangam",
    releaseDate: "2019",
  },
  {
    id: "9",
    title: "kadai kutty singam",
    releaseDate: "2019",
  },
];
function makeMovieDiv(movie) {
  const div = document.createElement("div");
  div.setAttribute("class", "movie-card");

  const id = `movie-${movie["id"]}`;
  div.setAttribute("id", id);

  const h2 = document.createElement("h2");
  h2.innerText = movie["title"];

  const h3 = document.createElement("h3");
  h3.innerText = movie["releaseDate"];

  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.addEventListener("click", function () {
    removeMovie(movie["id"]);
  });

  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(button);

  return div;
}
function addMovieForm(){
  const form = document.querySelector('#add-movie-card');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name=document.querySelector('#movie-name').value;
    const year=document.querySelector('#movie-year').value;

    const movie = {
      id: new Date().getTime(),
      title: name,
    releaseDate: year
    }
    if(!name && !year){
      alert('please enter value')
    }else{
    addMovie(movie);
    clearValue();
    }
  })
}
function addMovie(movie){
  favMovies.push(movie)
  updateUI();
}

function clearValue(){
  const name=document.querySelector('#movie-name');
  const year=document.querySelector('#movie-year');
   
  name.value='';
  year.value='';
}

function clearSite(){
  const site = document.querySelector(".site");
  site.innerHTML="";
}

function removeMovie(movieId) {
  const deleteIndex = favMovies.findIndex((movie) => movie.id == movieId);
  favMovies.splice(deleteIndex, 1);
  updateUI();
}

function appendToSite(m) {
  const site = document.querySelector(".site");
  site.appendChild(m);
}
function updateUI(){
  clearSite();
for (let i = 0; i < favMovies.length; i++) {
  const movieDiv = makeMovieDiv(favMovies[i]);
  appendToSite(movieDiv);
}
}
updateUI();
addMovieForm();