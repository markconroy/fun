const baseURL = 'https://sampleapis.com/css-color-names/api/colors';
const list = document.querySelector('.colour-list');
const input = document.querySelector('.colour-search__input');

fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    data.sort(function (a, b) {
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
    
    const listOfColours = document.querySelectorAll('.list-item');

    function handleInputChange() {
      let inputValue = input.value.toLowerCase();
      listOfColours.forEach(listOfColour => {
        if (!listOfColour.innerText.toLowerCase().includes(inputValue)) {
          listOfColour.style.display = 'none';
        } else {
          listOfColour.style.display = 'flex';
        }
      });
    }
      
    input.addEventListener('input', handleInputChange);
  
});