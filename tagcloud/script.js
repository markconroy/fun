const dataURL = 'https://gist.githubusercontent.com/markconroy/ddb798678e17a918824644f17bca487c/raw/4c2e0d5ac57ff088937ab716e3ae36886c758dba/tags.json';
const tags = document.querySelector(".tags");

function handleFontSize(numberOfArticles) {
  let fontSize = numberOfArticles * .5;
  fontSize <= 1 ? fontSize = 1 : fontSize = fontSize;
  fontSizeProperty = `${fontSize}em`;
}

function handleResult(result) {
  // Set our variables
  const name = result.title;
  const numberOfArticles = result.tagged_articles.length;
  const link = result.href;

  // First, set the font-size depending on how many articles each tag has.
  handleFontSize(numberOfArticles);
  
  // Then, create a list item for each tag and inline the font size.
  tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerHTML = `<a href="${link}" style="font-size: ${fontSizeProperty}">${name} (${numberOfArticles})</a>`;
  tags.appendChild(tag);
}

fetch(dataURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    data.forEach((result) => handleResult(result));
  });


