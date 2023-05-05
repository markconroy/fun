// Variables
const body = document.querySelector("body");
const container = `
  <div id="ma11y-tools" class="ma11y-tools">
    <div class="ma11y-container">
      <button type="button" class="ma11y-tools__button ma11y-tools__button--play">Start</button>
      <button type="button" class="ma11y-tools__button ma11y-tools__button--stop">Stop</button>
      <button type="button" class="ma11y-tools__button ma11y-tools__button--select-text">Read Selected Text</button>
    </div>
  </div>
`;
// Add the container to the page
body.insertAdjacentHTML("afterbegin", container);

const startButton = document.querySelector(".ma11y-tools__button--play");
const stopButton = document.querySelector(".ma11y-tools__button--stop");
const selectTextButton = document.querySelector(
  ".ma11y-tools__button--select-text"
);


// Read out loud function
function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

// Removing the noscript tags, since this can't work without JS,
// and we don't want something like a Google Analytics iframe source
// read out.
const noScripts = document.querySelectorAll("noscript");

noScripts.forEach((noScript) => {
  noScript.remove();
});

// Read the entire page. This is what makes this a very simple reader.
// We could easily make it much more complex.
const itemToRead = document.querySelector("body").textContent;

// Event listeners
startButton.addEventListener("click", () => {
  readOutLoud(itemToRead);
});

stopButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

selectTextButton.addEventListener("click", () => {
  const selectedText = window.getSelection().toString();
  readOutLoud(selectedText);
});
