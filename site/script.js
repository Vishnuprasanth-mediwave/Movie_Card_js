let favMovies = [
  {
    id: "0",
    title: "thupaki",
    releaseDate: "2014",
    isEdit: false,
  },
  {
    id: "1",
    title: "veeram",
    releaseDate: "2019",
    isEdit: false,
  },
  {
    id: "2",
    title: "kadai kutty singam",
    releaseDate: "2019",
    isEdit: false,
  },
];
function makeMovieDiv(movie) {
  if (movie.isEdit) {
    const div = document.createElement("form");
    div.setAttribute("class", "movie-card");
    /**
    <input type="text" name="movie-name"
      placeholder="Enter movie name"
      id="movie-name"
      value="Ghost"/>

    <input type="number" name="movie-year"
      placeholder="Enter movie year"
      id="movie-year"
      value="1998"/>

    <button>Update</button>
     */
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", `edit-${movie.id}-name`);
    nameInput.setAttribute("placeholder", "enter movie name");
    nameInput.setAttribute("id", `edit-${movie.id}-name`);
    nameInput.setAttribute("value", movie.title);
    nameInput.required = true;

    const yearInput = document.createElement("input");
    yearInput.setAttribute("type", "number");
    yearInput.setAttribute("name", `edit-${movie.id}-year`);
    yearInput.setAttribute("placeholder", "enter movie name");
    yearInput.setAttribute("id", `edit-${movie.id}-year`);
    yearInput.setAttribute("value", movie.releaseDate);
    yearInput.setAttribute("min", "1500");
    yearInput.setAttribute("max", new Date().getFullYear());

    const updateBtn = document.createElement("input");
    updateBtn.setAttribute("class", "update-btn");
    updateBtn.setAttribute("type", "submit");
    updateBtn.setAttribute("value", "movie update");

    div.addEventListener("submit", function () {
      const newTitle = document.querySelector(`#edit-${movie.id}-name`).value;
      const newYear = document.querySelector(`#edit-${movie.id}-year`).value;

      const toUpdateIndex = favMovies.findIndex((m) => m.id == movie.id);
      if (toUpdateIndex != -1) {
        favMovies[toUpdateIndex]["title"] = newTitle;
        favMovies[toUpdateIndex]["releaseDate"] = newYear;
        favMovies[toUpdateIndex]["isEdit"] = false;
        updateUI();
        saveToLocalStorage();
      }
    });

    div.appendChild(nameInput);
    div.appendChild(yearInput);
    div.appendChild(updateBtn);

    return div;
  } else {
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

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", function () {
      EditMovie(movie["id"]);
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(button);
    div.appendChild(editBtn);

    return div;
  }
}

function EditMovie(movieId) {
  const toEditIndex = favMovies.findIndex((movie) => movie.id == movieId);
  if (toEditIndex != -1) {
    favMovies[toEditIndex]["isEdit"] = true;
    updateUI();
  }
}

function addMovieForm() {
  const form = document.querySelector("#add-movie-card");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#movie-name").value;
    let year = document.querySelector("#movie-year").value;

    if (!name) {
      alert("please enter value");
      return false;
    } else if (!year) {
      alert("please enter year");
      return false;
    } else {
      const movie = {
        id: new Date().getTime(),
        title: name,
        releaseDate: year,
      };
      addMovie(movie);
      clearValue();
    }
  });
}
function addMovie(movie) {
  favMovies.push(movie);
  updateUI();
  saveToLocalStorage();
}

function clearValue() {
  const name = document.querySelector("#movie-name");
  const year = document.querySelector("#movie-year");

  name.value = "";
  year.value = "";
}

function clearSite() {
  const site = document.querySelector(".site");
  site.innerHTML = "";
}

function removeMovie(movieId) {
  const deleteIndex = favMovies.findIndex((movie) => movie.id == movieId);
  favMovies.splice(deleteIndex, 1);
  saveToLocalStorage();
  updateUI();
}

function appendToSite(m) {
  const site = document.querySelector(".site");
  site.appendChild(m);
}
function updateUI() {
  clearSite();
  for (let i = 0; i < favMovies.length; i++) {
    const movieDiv = makeMovieDiv(favMovies[i]);
    appendToSite(movieDiv);
  }
}

function saveToLocalStorage() {
  const str = JSON.stringify(favMovies);
  localStorage.setItem("my-movie-list", str);
}

function getFromLocalStorage() {
  const str = localStorage.getItem("my-movie-list");
  if (!str) {
    return favMovies;
  } else {
    favMovies = JSON.parse(str);
  }
}
getFromLocalStorage();
updateUI();
addMovieForm();
