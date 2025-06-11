var nombre = document.querySelector("autonombre");
var precio = document.querySelector("PriceUSandUY");
var estrellas = document.querySelector("estrellasRating");

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (autosLobby) {
    return autosLobby.json();
  })
  .then(function (auto) {
    console.log(auto[0].brand);
  })
  .catch(function (error) {
    alert(error);
  });
