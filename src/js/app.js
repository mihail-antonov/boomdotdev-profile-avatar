import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {

  let image = document.querySelector('.image');

  image.addEventListener('click', () => {

    image.style.transform = "scale(2.0)";
  });
});
