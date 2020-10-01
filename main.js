const body = document.body;
const themeButton = document.getElementById("color-theme-btn");
const randomFact = document.getElementById("random-fact");

themeButton.addEventListener("click", function (event) {
  body.classList.toggle("dark-theme");
});

function lowerFirstLetter(ssentence) {
  return sentence.charAt(0).toLowercase() + sentence.slice(1);
}

function getFact() {
  fetch(`https://uselessfacts.jsph.pl/random.json?language=en`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.text);
      randomFact.innerHTML = lowerFirstLetter(data.text);
    });
}
getFact();
