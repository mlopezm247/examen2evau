window.onload = function() {

 /*  document.forms[0].onsubmit = function(event) {
  event.preventDefault();
  
  } */
  document.forms[0].pais.onchange = mifunction;
  document.forms[0].email.onchange = mifunctionValidacion; 
  document.forms[0].contraseñaDos.onchange = ValidacionContraseña; 
  
  //crear SELECT
  function mifunction(params) {
    if (document.forms[0].pais.value=="espana") {
      console.log("entra");
     
      /* var selectContainer = document.getElementById("seleccion");
      var select = document.createElement("select");
      select.id = "ciudadSelect"; */
      
      var select = document.getElementById("Ciudad");

      for (var i = 0; i <= select.length; i++) {
        console.log("encuentraa");
        select.remove(opcion);
      }


      var opciones = ["Madrid", "Barcelona","Sevilla"];
      
      for (var i = 0; i < opciones.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opciones[i];
        opcion.text = opciones[i];
        select.add(opcion);
        console.log("crea opcion")
      }
  
  
  
  
  
    }else{
      console.log("no entress");
    }

//OPCION MEXICO
    if (document.forms[0].pais.value=="mexico") {
      console.log("entra");
     
     /*  var selectContainer = document.getElementById("seleccion");
      var select = document.createElement("select");
      select.id = "ciudadSelect"; */
  
      var select = document.getElementById("Ciudad");

      for (var i = 0; i <= select.length; i++) {
        console.log("encuentraa");
        select.remove(opcion);
      }

      var opciones = ["ciudadMexico", "ciudadMexico2","ciudadMexico3"];
  
      for (var i = 0; i < opciones.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opciones[i];
        opcion.text = opciones[i];
        select.add(opcion);
        console.log("crea opcion")
      }
  
  
  
  
  
    }else{
      console.log("no entress");
    }
  }
  
//VALIDACION EMAIL
campoValido=false;
  function mifunctionValidacion(params) {
    patron= /^[a-z]{1,}@[a-z]{1,}\.[a-z]{2,}$/;
    
    patron.test(document.forms[0].email.value)?campoValido=true:campoValido=false
    console.log("entra");
    console.log(campoValido);
    if (campoValido==true) {
      emailtexto.innerHTML="Email :Correcto";
    }else{
      emailtexto.innerHTML="Email :Incorrecto";
    }
  }
//VALIDACION CONTRASEÑA

campoValidoContraseña=false;
  function ValidacionContraseña(params) {
    console.log("entro");
    var contraseña = document.getElementById('contraseña').value;
    var contraseñaDos = document.getElementById('contraseñaDos').value;

    if (contraseña===contraseñaDos) {
      campoValidoContraseña=true;
    }else{
      campoValidoContraseña=false;
    }

    if (campoValidoContraseña==true) {
      contraseñaDosTexto.innerHTML="Repita Contraseña :Correcto";
    }else{
      contraseñaDosTexto.innerHTML="Repita Contraseña :No coinciden";
    }
  }



 //VALIDACION OBLIGATORIOS
  formulario.addEventListener("submit", function(event){
    let campos=formulario.querySelectorAll('input');
    let camposValidos =true;

    campos.forEach(function (campo) {
      if (!campo.value) {
        camposValidos =false;
      }
    });
    if (!camposValidos) {
      alert("Porfavor, complete todos los campos");
      event.preventDefault();
    }else{



          // Obtener los elementos del formulario
          var nombre = document.getElementById('nombre').value;
          var Apellido = document.getElementById('Apellido').value;
          var Direccion = document.getElementById('Direccion').value;
          var pais = document.getElementById('pais').value;
          var Ciudad = document.getElementById('Ciudad').value;

          var telefono = document.getElementById('telefono').value;
          var email = document.getElementById('email').value;
          var usuario = document.getElementById('usuario').value;
          var contraseña = document.getElementById('contraseña').value;


          // Construir el resultado
          var resultadoTexto = "Nombre: " + nombre + "<br>" +
                                "Apellido: " + Apellido + "<br>"+
                              "Direccion: " + Direccion + "<br>" +
                              "pais: " + pais + "<br>" +
                                "Ciudad: " + Ciudad + "<br>"+
                              "Teléfono: " + telefono + "<br>" +
                              "email: " + email + "<br>" +
                              "usuario: " + usuario + "<br>";

          // Mostrar el resultado en el cuadro de texto
          document.getElementById('resultado').innerHTML = resultadoTexto;






          }
  }); 


  //ENVIAR
  document.forms[0].onsubmit=function(event){
    event.preventDefault();//evitar que se envie el formulario por defecto
   

};
  
  
  
  }