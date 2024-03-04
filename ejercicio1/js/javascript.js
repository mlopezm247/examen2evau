
window.onload=function(){


  var titulo = document.getElementById('titulo');
  var texto = document.getElementById('texto');
  var imagen = document.getElementById('imagen');
newSize =20;
medidaImagen =250;
//TITULO
  titulo.addEventListener('wheel', function (event) {
     
    console.log("ha echo scroll");
    const deltaY=event.deltaY;
    if (deltaY <0) {
      newSize =newSize+20;
      titulo.style.fontSize=newSize+'px';
    }else{
      newSize =newSize-20;
      titulo.style.fontSize=newSize+'px';
    }
   
  });
  titulo.addEventListener('click', function (event) {
     
    titulo.style.fontSize=30+'px';
   
  });
  
  //TEXTO
  texto.addEventListener('wheel', function (event) {
    console.log("ha echo scroll");
    const deltaY=event.deltaY;
    if (deltaY <0) {
      newSize =newSize+20;
      texto.style.fontSize=newSize+'px';
    }else{
      newSize =newSize-20;
      texto.style.fontSize=newSize+'px';
    }
   
  });

  titulo.addEventListener('click', function (event) {
     
    titulo.style.fontSize=30+'px';
   
  });

//CARTA
imagen.addEventListener('wheel', function (event) {
  console.log("ha echo scroll");
  const deltaY=event.deltaY;
  if (deltaY <0) {
    medidaImagen =medidaImagen+20;
    imagen.style.width=medidaImagen+'px';
  }else{
    medidaImagen =medidaImagen-20;
    imagen.style.width=medidaImagen+'px';
  }
 
});

imagen.addEventListener('click', function (event) {
   
  imagen.style.width=250+'px';
 
});
grados=0;
document.addEventListener("keydown",function (event) {

  if (event.key=="W" ) {
    console.log(event.key);
    grados=grados+40;
    imagen.style.transform='rotate('+grados+'deg)';
  
  }
  if (event.key=="Q" ) {
    console.log(event.key);
    grados=grados-40;
    imagen.style.transform='rotate('+grados+'deg)';
  
  }
});

}

