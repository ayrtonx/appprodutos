let vista= document.getElementById("vistaclientes");



function escribir(){
    let datos = JSON.parse(localStorage.getItem("datos"));
    
    console.log(JSON.stringify(datos))
    vista.innerHTML ="";
    for(i=0; datos.length; i++){
        let nombreobjeto = datos[i].nombre;
        let telefono = datos[i].telefono;
        let nombrestring= JSON.stringify(nombreobjeto);
        let nombre = nombrestring.toUpperCase() ;
       
vista.innerHTML += `<div class="card black-text  " id="cajaclientes" >
<li><span>Nombre: </span>${nombre}  <br>  <span>Teléfono: </span>${telefono}    
</div>
`;
    }
    
}


escribir();
