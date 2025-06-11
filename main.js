fetch("https://api.adviceslip.com/advice")
  .then((e) => {
    let re = e.json();
    return re;
  })
  .then((e) => {
    return e.slip;
  })
  .then((e) => {
    let advice = e.advice;
    let id = `ADVICE #${e.id}`;
    let textId = document.createTextNode(id);
    let textNode = document.createTextNode(advice);
    let span = document.querySelector(".ID");
    let paragraph = document.querySelector(".paragraph");
    span.appendChild(textId);
    paragraph.appendChild(textNode);
  });
let rel = document.querySelector(".iconTow");
rel.addEventListener("click", function () {
  window.location = window.location.href;
});
