const tags = document.querySelector(".tags");

function handleResult(result) {
  const name = result.name;
  const numberOfFilms = result.films.length;
  tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerHTML = `${name} (${numberOfFilms})`;
  tags.appendChild(tag);
}

fetch(`https://swapi.dev/api/people/`)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const results = data.results;
    results.forEach((result) => handleResult(result));
  });
