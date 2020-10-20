const baseURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
const list = document.querySelector('.colour-list');
const input = document.querySelector('.colour-search__input');

fetch(baseURL)
  .then(resp => resp.json())
  .then(data => {
    Object.keys(data).forEach(datum => {
      listItem = document.createElement('li');
      listItem.classList.add('list-item');
      listItem.innerHTML = `
        <div class="list-item__panel" style="background-color: ${data[datum]}">
          <span class="list-item__name">${datum}</span>
        </div>
        <div class="list-item__hex">${data[datum]}</div>
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