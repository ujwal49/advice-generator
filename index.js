let quote;

let btn = document.getElementById("rdm-btn");
let Q = document.getElementById("quote-txt");

function randomQuote() {
  quote = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let final = data;
      console.log(final.slip.advice);
      Q.innerText = final.slip.advice;
    });
}

btn.addEventListener("click", randomQuote);
