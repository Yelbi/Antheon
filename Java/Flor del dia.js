document.addEventListener("DOMContentLoaded", function () {
  var DIO = document.getElementById("DIO");
  var fecha = new Date();
  var dia = fecha.getDate();

  // Puedes ajustar estos valores según tus necesidades
  var datos;

  switch (dia % 31) {
      case 0:
          datos = {
              fondo: "url('img/Generales/Amapolas.jpg')",
              titulo: "Título para caso 0",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 0",
              link: "href('')"
            };
          break;

      case 1:
          datos = {
              fondo: "url('img/Generales/Rosas.jpg')",
              titulo: "Rosa",
              ciencia: "fafafa",
              descripcion: "Las rosas pertenecen al género botánico Rosa y se caracterizan por sus pétalos suaves, delicados y a menudo fragantes. Vienen en una amplia gama de colores, incluyendo rojo, rosa, blanco, amarillo, naranja y más. Las flores de rosa generalmente tienen capullos rodeados por capas de pétalos que se abren gradualmente a medida que la flor florece.",
              link: "href('')"
            };
          break;

      case 2:
          datos = {
              fondo: "url('img/Generales/jacintos.jpg')",
              titulo: "Título para caso 2",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 2",
              link: "href('')"
            };
          break;

      case 3:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 4:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 5:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 6:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 7:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 8:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 9:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 10:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 11:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 12:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 13:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 14:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 15:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 16:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 17:
          datos = {
              fondo: "url('img/Flor del dia/pexels-neosiam-679997.jpg')",
              titulo: "Flor de Loto",
              ciencia: "Nelumbo nucifera",
              descripcion: "Las flores de loto, conocidas científicamente como Nelumbo nucifera, son flores acuáticas magníficas y profundamente simbólicas. Son originarias de partes de Asia y Australia y se encuentran en estanques y lagos de aguas tranquilas. Las flores de loto emergen de la superficie del agua en tallos largos y robustos.",
              link: "href('Galeria.html')"
            };
          break;

          case 18:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 19:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 20:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 21:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 22:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 23:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 24:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 25:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 26:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 27:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 28:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 29:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

          case 30:
          datos = {
              fondo: "url('imagen4.jpg')",
              titulo: "Título para caso 3",
              ciencia: "fafafa",
              descripcion: "Descripción para caso 3",
              link: "href('')"
            };
          break;

      default:
          datos = {
              fondo: "url('imagenDefault.jpg')",
              titulo: "Título predeterminado",
              ciencia: "fafafa",
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