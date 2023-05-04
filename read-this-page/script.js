// Read the entire page. This is what makes this a very simple reader.
// We could easily make it much more complex.
const itemToRead = document.querySelector("body").textContent;

// Removing the noscript tags, since this can't work without JS,
// and we don't want something like a Google Analytics iframe source
// read out.
const noScripts = document.querySelectorAll("noscript");

noScripts.forEach((noScript) => {
  noScript.remove();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

readOutLoud(itemToRead);