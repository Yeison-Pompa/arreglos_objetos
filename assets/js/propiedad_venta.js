const propiedades_venta = [
  {
    id:1,
    nombre: "Exclusive Surco",
    src: "",
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
    src: "",
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
    src: "",
    descripcion: "Lanzamiento Looo And Feel 2, un proyecto arquitectonico audaz e imponente",
    ubicacion: "Avenida Cesar Vallejo 320",
    habitaciones: 3,
    costo: 219600,
    smoke: false,
    pets: true,
  },

  {

    id:4,
    nombre: "Benavides Deluxe",
    src: "",
    descripcion: "Lanzamiento Looo And Feel 2, un proyecto arquitectonico audaz e imponente",
    ubicacion: "Av. 28 de julio 1365 miraflores",
    habitaciones: 4,
    costo: 750000,
    smoke: true,
    pets: false,
  }
];


const section = document.querySelector("#section-hero")

let html = ""

for (const propiedad of propiedades_venta) {
  html += `
 
  <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
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
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${propiedad.smoke}
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> ${propiedad.pets}
                </p>
              </div>
            </div>
          </div>
     
  `

}

section.innerHTML = html