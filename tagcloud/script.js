const dataURL =
  "https://gist.githubusercontent.com/markconroy/ddb798678e17a918824644f17bca487c/raw/a4eeacd28fad81b0b828d0dda6ece2dcf193031b/tags.json";
const tags = document.querySelector(".tags");

function handleResult(result) {
  // Set our variables
  const numberOfArticles = result.tagged_articles.length;
  let fontSize = numberOfArticles * 1.25;
  const name = result.title;
  const link = result.href;
  
  // First, set the font-size depending on how many articles each tag has.
  if (fontSize <= 2) {
    fontSize = 1;
  } else if (fontSize >= 5) {
    fontSize = 5;
  } else {
    fontSize = fontSize;
  }
  
  const fontSizeProperty = `${fontSize}em`;

  // Then, create a list element for each tag and inline the font size.
  tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerHTML = `<a class="tag__link" href="${link}" style="font-size: ${fontSizeProperty}">${name} (${numberOfArticles})</a>`;

  // if (numberOfArticles > 1) {
  tags.appendChild(tag);
  // }
}

fetch(dataURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    data.forEach((result) => handleResult(result));
  });
