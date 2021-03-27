import handleSubmit from "./js/formHandler";
import urlcheckview from "./js/urlcheckview";
import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  //console.log("mosatafa")
  let acform = document.getElementById("form");
  acform.addEventListener("submit", function (e) {
    e.preventDefault();
    urlcheckview();
  });
  let SubmitnButton = document.getElementById("SubmitnButton");
  SubmitnButton.addEventListener("click", function (e) {
    e.preventDefault();
    urlcheckview();
  });
});
export { handleSubmit };
