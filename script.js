
window.onload = function(){    
    
    AgregarDatos();

}


async function AgregarDatos() {
    let sacardatos = await fetch("./phone-api.json");
    let recibirdatos = await sacardatos.json();
    CrearTarjeta(recibirdatos);
}


async function CrearTarjeta(moviles) {
    let contenedor = document.createElement('div');
    document.body.append(contenedor);
    

    let body = document.createElement('div');
    contenedor.classList.add('contenedor');
    contenedor.append(body);
    
    for (let movil of moviles) {
        
        let contenido = document.createElement('div');
        contenido.classList.add('card');
        body.append(contenido);

        let imagenmovil = document.createElement('img');
        imagenmovil.src = movil.image;
        contenido.append(imagenmovil);

        let Nombremovil = document.createElement('h2');
        Nombremovil.innerHTML = movil.name;
        contenido.append(Nombremovil);

        let colormovil = document.createElement('p');
        colormovil.innerHTML = movil.color;
        contenido.append(colormovil);

        let capacidadmovil = document.createElement('p');
        capacidadmovil.innerHTML = movil.capacity;
        contenido.append(capacidadmovil);

        let preciomovil = document.createElement('p');
        preciomovil.innerHTML = movil.price;
        contenido.append(preciomovil);

        let linkmovil = document.createElement('a');
        linkmovil.href = movil.url;
        linkmovil.target = "_blank";  
        linkmovil.innerText = "PAGINA WEB";
        contenido.append(linkmovil);

        
        contenido.addEventListener('contextmenu', function(event) 
        {
            event.preventDefault(); 
            document.body.classList.toggle('modo-noche');
        });

        
        contenido.addEventListener('mouseover', function() {
            contenido.style.backgroundColor = '#fefefe';
        });
        contenido.addEventListener('mouseout', function() {
            contenido.style.backgroundColor = '#ececec';
        });
        
    }

}
