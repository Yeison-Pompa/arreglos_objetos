const propiedades_venta = [
  {
    id:1,
    nombre: "Exclusive Surco",
    src: "assets/img/dpto1.jpg",
    descripcion: "Lanzamiento Looo And Feel 2, un proyecto arquitectonico audaz e imponente",
    ubicacion: "Av. Encalada 1344. Surco",
    habitaciones: 3,
    costo: 319919,
    smoke: false,
    pets: true,
  },


  {
    id:2,
    nombre: "Salaverry 571",
    src: "assets/img/dpto2.jpg",
    descripcion: "Lanzamiento Looo And Feel 2, un proyecto arquitectonico audaz e imponente",
    ubicacion: "Avenida General Felipe Salaverry 571",
    habitaciones: 2,
    costo: 366000,
    smoke: true,
    pets: false,
  },
  {
    id:3,
    nombre: "Aster Basadre",
    src: "assets/img/dpto3.jpg",
    descripcion: "Lanzamiento Looo And Feel 2, un proyecto arquitectonico audaz e imponente",
    ubicacion: "Avenida Cesar Vallejo 320",
    habitaciones: 3,
    costo: 219600,
    smoke: false,
    pets: true,
  },
  {
    id:3,
    nombre: "Aster Basadre",
    src: "assets/img/dpto3.jpg",
    descripcion: "Lanzamiento Looo And Feel 2, un proyecto arquitectonico audaz e imponente",
    ubicacion: "Avenida Cesar Vallejo 320",
    habitaciones: 3,
    costo: 219600,
    smoke: false,
    pets: true,
  }

  
];


const section = document.querySelector("#section-hero")

let html = ""

for (const propiedad of propiedades_venta) {
  let fumar = propiedad.smoke ? `<i class="fas fa-smoking"></i> Permitido fumar` : `<i class="fas fa-smoking-ban"></i>No se permite fumar`;
  let mascotas = propiedad.pets ? `<i class="fas fa-paw"></i> Mascotas permitidas` : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`;
  let iconoFumar = propiedad.smoke ? "text-success" : "text-danger";
  let iconoMascotas = propiedad.pets ? "text-success" : "text-danger";


  html += `
 
  <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedad.ubicacion} 

                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo} </p>
                <p class="${iconoFumar}">
              
                   ${fumar}
                </p>
                <p class="${iconoMascotas}">
                
                  ${mascotas}
                </p>
              </div>
            </div>
          </div>
     
  `

}

section.innerHTML = html