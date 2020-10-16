const baseURL = 'https://sampleapis.com/css-color-names/api/colors';
const list = document.querySelector('.colour-list');

fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    data
    .sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    .forEach(datum => {
      listItem = document.createElement('li');
      listItem.classList.add('list-item');
      listItem.innerHTML = `
        <div class="list-item__panel" style="background-color: ${datum.hex}">
          <span class="list-item__name">${datum.name}</span>
        </div>
        <div class="list-item__hex">${datum.hex}</div>
      `
      list.appendChild(listItem);
    });
  });

  