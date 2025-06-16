var nombre = document.querySelector(".autonombre");
var precio = document.querySelector("#PriceUSandUY");
var precioUY = document.querySelector("#PriceUY");
var estrellas = document.querySelector("#estrellasRating");
var añoVehiculo = document.querySelector("#año");
var info = document.querySelector("#infoVehiculo");
var img = document.querySelector(".autonuevo");
var cartascontenedor = document.querySelector(".cartas");
var modelo = document.querySelector("#autoModelo");
var selectAño = document.querySelector(".seleccionAño");
var selectMarcas = document.querySelector(".seleccionMarca");

var botonFiltrar = document.querySelector("#botonfiltrar");
var botonMoneda = document.querySelector("#cambiarMoneda");

var año = 1899;
for (let i = 0; i < 125; i++) {
  var años = año++;
  selectAño.insertAdjacentHTML("beforeend", `<option>${año}</option>`);
}

fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
  .then(function (autosLobby) {
    return autosLobby.json();
  })
  .then(function (auto) {
    for (const autos of auto) {
      cartascontenedor.insertAdjacentHTML(
        "afterbegin",
        `<div class="col-lg-6 border border-2 m-0 mb-3 pb-2 p-0 ">
                    <div class="border border-3 m-1 autonuevo p-0 h-100">
                      <img src="${autos.image}" alt="" / class="w-100 h-100
                        position-relative">
                    </div>
                    </div>
                  <div class="col-lg">
                    <div class="row">
                      <div class="col-lg d-flex gap-2">
                        <h2 class="autonombre">${autos.brand}</h2>
                        <h2 class="autoModelo">${autos.model}</h2>
                      </div>
                      <div class="col-8">
                        <h7 id="PriceUSandUY" class="pe-2">USD: $${autos.price_usd}</h7>
                        <h7 id="PriceUY" class="">UY: $${autos.price_uyu}</h7>
                        <div class="d-flex gap-4">
                          <p id="estrellasRating">Ranting: ${autos.rating}⭐</p>
                          <p id="año" class="">Año: ${autos.year}</p>
                        </div>
                      </div>
                    </div>
                    <p id="infoVehiculo">${autos.description}</p>

                    <!----------------------------------------------------------------------------->
                    
                    <div class="mt-3 mb-3 d-flex d-lg-block gap-1">
                      <button class="btn btn-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cart"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                          />
                        </svg>
                        Comprar
                      </button>
                      <button class="btn btn-outline-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-info-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                          />
                          <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                          />
                        </svg>
                        Más informacion
                      </button>
                      <button class="btn btn-outline-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-share"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
                          />
                        </svg>
                        Compartir
                      </button>
                    </div>
                  </div>
                  <hr />`
      );
    }
  })
  .catch(function (error) {
    alert(error);
  });
//-----------------------------------MARCAS----------------------------------------------//
fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
  .then(function (autoMarcas) {
    return autoMarcas.json();
  })
  .then(function (autoMarcas) {
    for (const marcas of autoMarcas) {
      selectMarcas.insertAdjacentHTML(
        "beforeend",
        `<option>${marcas}</option>`
      );
    }
  })
  .catch(function (error) {
    alert(error);
  });
//-------------------------------------MODELOS-----------------------------------------------------//
selectMarcas.addEventListener("change", function () {
  modelo.innerHTML = "";
  selectAño.innerHTML = "";
  fetch(
    `https://ha-front-api-proyecto-final.vercel.app/models?brand=${selectMarcas.value}`
  )
    .then(function (autosModelo) {
      return autosModelo.json();
    })
    .then(function (autosModelo) {
      for (const modelos of autosModelo) {
        modelo.insertAdjacentHTML("beforeend", `<option>${modelos}</option>`);
      }
    })
    .catch(function (error) {
      alert(error);
    });
  fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
    .then(function (autosLobby) {
      return autosLobby.json();
    })
    .then(function (auto) {
      for (const autos of auto) {
        if (autos.brand === selectMarcas.value) {
          selectAño.insertAdjacentHTML(
            "beforeend",
            `<option>${autos.year}</option>`
          );
        }
      }
    })
    .catch(function (error) {
      alert(error);
    });
});
//---------------------------------------------------------------------------------------//

botonFiltrar.addEventListener("click", () => {
  cartascontenedor.innerHTML = "";

  fetch(
    `https://ha-front-api-proyecto-final.vercel.app/cars?year=${selectAño.value}&brand=${selectMarcas.value}&model=${modelo.value}`
  )
    .then(function (autosLobby) {
      return autosLobby.json();
    })
    .then(function (autosLobby) {
      if (autosLobby == "") {
        cartascontenedor.insertAdjacentHTML(
          "beforeend",
          `<div class="row ms-lg-2 ms-0 mb-3 mt-4 mt-lg-0 bg-dark" id="cartaError">
                  <h1>Lamentamos no encontrar tu auto!</h1>
                  <h2>Prueba con otras caracteristicas en el filtro!</h2>
                </div>`
        );
      } else {
        for (const autos of autosLobby) {
          cartascontenedor.insertAdjacentHTML(
            "afterbegin",
            `<div class="col-lg-6 border border-2 m-0 pb-2 p-0 ">
                    <div class="border border-3 m-1 autonuevo p-0 h-100">
                      <img src="${autos.image}" alt="" / class="w-100 h-100
                        position-relative">
                    </div>
                    </div>
                  <div class="col-lg">
                    <div class="row">
                      <div class="col-lg d-flex gap-2">
                        <h2 class="autonombre">${autos.brand}</h2>
                        <h2 class="autoModelo">${autos.model}</h2>
                      </div>
                      <div class="col-8">
                        <h7 id="PriceUSandUY" class="pe-2">USD: $${autos.price_usd}</h7>
                        <h7 id="PriceUY" class="">UY: $${autos.price_uyu}</h7>
                        <div class="d-flex gap-4">
                          <p id="estrellasRating">Ranting: ${autos.rating}⭐</p>
                          <p id="año" class="">Año: ${autos.year}</p>
                        </div>
                      </div>
                    </div>
                    <p id="infoVehiculo">${autos.description}</p>

                    <!----------------------------------------------------------------------------->
                    
                    <div class="mt-3 d-flex d-lg-block gap-1">
                      <button class="btn btn-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cart"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                          />
                        </svg>
                        Comprar
                      </button>
                      <button class="btn btn-outline-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-info-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                          />
                          <path
                            d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                          />
                        </svg>
                        Más informacion
                      </button>
                      <button class="btn btn-outline-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-share"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
                          />
                        </svg>
                        Compartir
                      </button>
                    </div>
                  </div>
                  <hr />`
          );
        }
      }
    })
    .catch(function (error) {
      alert(error);
    });
});
