const baseURL =
  "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json";

fetch(baseURL)
  .then((resp) => resp.json())
  .then((data) => {
    const generatePasswordButton = document.querySelector('.password__reset-button');
    
    function generatePassword() {
      const colours = Object.keys(data);
      const numberOfColours = colours.length;
      
      const password_1 = colours[Math.floor(Math.random() * colours.length)];
      const password_2 = colours[Math.floor(Math.random() * colours.length)];
      const password_3 = colours[Math.floor(Math.random() * colours.length)];
      const password_4 = colours[Math.floor(Math.random() * colours.length)];
      
      const passwordColour1 = document.querySelector(".password__colour--1");
      const passwordColour2 = document.querySelector(".password__colour--2");
      const passwordColour3 = document.querySelector(".password__colour--3");
      const passwordColour4 = document.querySelector(".password__colour--4");
      const passwordContainer = document.querySelector(".password__is");

      passwordContainer.innerHTML = `${password_1}${password_2}${password_3}${password_4}`;
      passwordColour1.style.backgroundColor = `${password_1}`;
      passwordColour2.style.backgroundColor = `${password_2}`;
      passwordColour3.style.backgroundColor = `${password_3}`;
      passwordColour4.style.backgroundColor = `${password_4}`;
    }

    generatePasswordButton.addEventListener('click', generatePassword);
 
    generatePassword();
 
  });
