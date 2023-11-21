document.addEventListener("DOMContentLoaded", function () {
  var DIO = document.getElementById("DIO");
  var fecha = new Date();
  var dia = fecha.getDate();

  // Puedes ajustar estos valores según tus necesidades
  var datos;

  switch (dia % 31) {
      case 0:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Amapola.jpg')",
              titulo: "Amapola",
              ciencia: "Papaver rhoeas",
              descripcion: "Descripción para caso 0",
              link: "href('')"
            };
          break;

      case 1:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Azafran.jpg')",
              titulo: "Azafran",
              ciencia: "Crocus sativus",
              descripcion: "Las rosas pertenecen al género botánico Rosa y se caracterizan por sus pétalos suaves, delicados y a menudo fragantes. Vienen en una amplia gama de colores, incluyendo rojo, rosa, blanco, amarillo, naranja y más. Las flores de rosa generalmente tienen capullos rodeados por capas de pétalos que se abren gradualmente a medida que la flor florece.",
              link: "href('')"
            };
          break;

      case 2:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Azucena.jpg')",
              titulo: "Azucena",
              ciencia: "Lilium candidum",
              descripcion: "Descripción para caso 2",
              link: "href('')"
            };
          break;

      case 3:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Begonias.jpg')",
              titulo: "Begonias",
              ciencia: "Begonia",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

      case 4:
      datos = {
          fondo: "url('/Antheon/img/Flor del dia/Calendulas.jpg')",
          titulo: "Calendulas",
          ciencia: "Calendula",
          descripcion: "Descripción para caso 3",
          link: "href('')"
        };
      break;

      case 5:
      datos = {
          fondo: "url('/Antheon/img/Flor del dia/Camelias.jpg')",
          titulo: "Camelias",
          ciencia: "Camellia",
          descripcion: "Descripción para caso 3",
          link: "href('')"
        };
      break;

      case 6:
      datos = {
          fondo: "url('/Antheon/img/Flor del dia/Claveles.jpg')",
          titulo: "Claveles",
          ciencia: "Dianthus caryophyllus",
          descripcion: "Descripción para caso 3",
          link: "href('')"
        };
      break;

      case 7:
      datos = {
          fondo: "url('/Antheon/img/Flor del dia/Crisantemos.jpg')",
          titulo: "Crisantemos",
          ciencia: "Chrysanthemum",
          descripcion: "Descripción para caso 3",
          link: "href('')"
        };
      break;

      case 8:
      datos = {
          fondo: "url('/Antheon/img/Flor del dia/Dalias.jpg')",
          titulo: "Dalias",
          ciencia: "Dahlia",
          descripcion: "Descripción para caso 3",
          link: "href('')"
        };
      break;

          case 9:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Gazania.jpg')",
              titulo: "Gazania",
              ciencia: "Gazania",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 10:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Gerbera.jpg')",
              titulo: "Gerbera",
              ciencia: "Gerbera",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 11:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Girasoles.jpg')",
              titulo: "Girasoles",
              ciencia: "Helianthus annuus",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 12:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Gladiolo.jpg')",
              titulo: "Gladiolos",
              ciencia: "Gladiolus",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 13:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Hortensias.jpg')",
              titulo: "Hortensias",
              ciencia: "Hydrangea",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 14:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Iris.jpg')",
              titulo: "Iris",
              ciencia: "Iris",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 15:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Jacintos.jpg')",
              titulo: "Jacintos",
              ciencia: "Hyacinthus",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 16:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Jazmin.jpg')",
              titulo: "Jazmin",
              ciencia: "Jasminum",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 17:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Lavanda.jpg')",
              titulo: "Lavanda",
              ciencia: "Lavandula",
              descripcion: "Las flores de loto, conocidas científicamente como Nelumbo nucifera, son flores acuáticas magníficas y profundamente simbólicas. Son originarias de partes de Asia y Australia y se encuentran en estanques y lagos de aguas tranquilas. Las flores de loto emergen de la superficie del agua en tallos largos y robustos.",
              link: "href('Galeria.html')"
            };
          break;

          case 18:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Lirios.jpg')",
              titulo: "Lirios",
              ciencia: "Lilium",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 19:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Loto.jpg')",
              titulo: "Flor de Loto",
              ciencia: "Nelumbo nucifera",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 20:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Lycoris.jpg')",
              titulo: "Lycoris",
              ciencia: "Lycoris",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 21:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Margaritas.jpg')",
              titulo: "Margaritas",
              ciencia: "Bellis perennis",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 22:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Nacisos,jpg')",
              titulo: "Nacisos",
              ciencia: "Narcissus",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 23:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Orquideas.jpg')",
              titulo: "Orquideas",
              ciencia: "Orchidaceae",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 24:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Pensamiento.jpg')",
              titulo: "Pensamiento",
              ciencia: "Viola x wittrockiana",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 25:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Peonias.jpg')",
              titulo: "Peonias",
              ciencia: "Paeonia",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 26:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Petunias.jpg')",
              titulo: "Petunias",
              ciencia: "Petunia",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 27:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Rosas.jpg')",
              titulo: "Rosas",
              ciencia: "Rosa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 28:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Tulipanes.jpg')",
              titulo: "Tulipanes",
              ciencia: "Tulipa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 29:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Verbena.jpg')",
              titulo: "Verbena",
              ciencia: "Verbena",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 30:
          datos = {
              fondo: "url('/Antheon/img/Flor del dia/Violetas.jpg')",
              titulo: "Violetas",
              ciencia: "Viola",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

      default:
          datos = {
              fondo: "url('imagenDefault.jpg')",
              titulo: "Título predeterminado",
              ciencia: "",
              descripcion: "Descripción predeterminada",
              link: "('')"
            };
          break;
  }

  aplicarDatos(DIO, datos);
});

// Función para aplicar los datos al div
function aplicarDatos(div, datos) {
  div.style.backgroundImage = datos.fondo;
  div.querySelector("h1").textContent = datos.titulo;
  div.querySelector("span").textContent = datos.ciencia;
  div.querySelector("p").textContent = datos.descripcion;
  a.href = datos.link;
}