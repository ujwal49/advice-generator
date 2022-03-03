let quote;

let btn = document.getElementById("rdm-btn");
let Q = document.getElementById("quote-txt");
let adviceId = document.getElementById("idNum");

function randomQuote() {
  quote = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      let final = data;
      console.log(final.slip.advice);
      Q.innerText = final.slip.advice;
      adviceId.innerText = final.slip.id;
    });
}

btn.addEventListener("click", randomQuote);
