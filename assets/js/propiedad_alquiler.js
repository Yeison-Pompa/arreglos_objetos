const propiedades_alquiler = [
    {
      id:1,
      nombre: "Mayte Apartment",
      src: "assets/img/alqui1.jpg",
      descripcion: "Este apartamento combina elegancia contemporánea con comodidades modernas.",
      ubicacion: "Av. 28 de Julio 873 Miraflores",
      habitaciones: 3,
      costo: 319919,
      smoke: true,
      pets: false,
    },
  
  
    {
      id:2,
      nombre: "Fontana 21",
      src: "assets/img/alqui2.jpg",
      descripcion: "Este apartamento combina elegancia contemporánea con comodidades modernas.",
      ubicacion: "Av. alcanfores 271 Barranco ",
      habitaciones: 5,
      costo: 366000,
      smoke: false,
      pets: false,
    },
    {
      id:3,
      nombre: "Paradise el sol",
      src: "assets/img/alqui3.jpg",
      descripcion: "Este apartamento combina elegancia contemporánea con comodidades modernas.",
      ubicacion: "Av. Los bosques 250 La Molina",
      habitaciones: 4,
      costo: 219600,
      smoke: true,
      pets: true,
    },

    {
        id:4,
        nombre: "El Acantilado",
        src: "assets/img/alqui4.jpg",
        descripcion: "Este apartamento combina elegancia contemporánea con comodidades modernas.",
        ubicacion: "Rio colorado 23 Surco",
        habitaciones: 3,
        costo: 219600,
        smoke: false,
        pets: true,
      },
  
    
  ];
  
  
  const section = document.querySelector("#section-hero")
  
  let html = ""
  
  for (const propiedad of propiedades_alquiler) {
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