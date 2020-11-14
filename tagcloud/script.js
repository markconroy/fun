const tagsList = document.querySelector(".tags");

function handleResult(result) {
  const name = result.name;
  const numberOfFilms = result.films.length;
  listItem = document.createElement("li");
  listItem.classList.add("tag");
  listItem.innerHTML = `${name} (${numberOfFilms})`;
  tagsList.appendChild(listItem);
}

fetch(`https://swapi.dev/api/people`)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const results = data.results;
    results.forEach(result => handleResult(result));
  });
