window.onload = function () {
lista.innerHTML+='<div class="row"> <div class="col"><strong>Concepto</strong></div> <div class="col"><strong>Importe</strong></div> <div class="col"><strong>tipo Iva</strong></div><div class="col"><strong>IVA</strong></div><div class="col"><strong>IRPF</strong></div><div class="col"><strong>Cobrada</strong></div></div>';

  formulario.addEventListener("submit", function(event){
    var Concepto = document.getElementById('Concepto').value;
    var Importe = document.getElementById('Importe').value;
    var iva = document.getElementById('iva').value;
/*     var Cobrada = document.getElementsByName('cobrada').value; */


        var aficionesCheckboxes = document.getElementsByName('cobrada');
        for (var i = 0; i < aficionesCheckboxes.length; i++) {
            if (aficionesCheckboxes[i].checked) {
              Cobrada=aficionesCheckboxes[i].value;
                
            }else{
              Cobrada="false";
            }
        }

      function producto(Concepto,Importe,iva,Cobrada) {
          this.Concepto = Concepto;
          this.Importe=Importe;
          this.iva = iva;
          this.Cobrada = Cobrada;
        }
      
        producto1= new producto(Concepto,Importe,iva,Cobrada);
        
        let datos=Object.keys(producto1);

        ivaResultado=(iva/100)*Importe;
        irpf=(15/100)*Importe;

        
       
          
    
   
        for (let i = 0; i < datos.length; i++) {
          console.log(datos[i]+":"+producto1[datos[i]]);
          if (i==0) {
          conceptoText= producto1[datos[i]]
          }
          if (i==1) {
            importeText= producto1[datos[i]]
          }
          if (i==2) {
            ivaText= producto1[datos[i]]
          }
          if (i==3) {
            console.log(producto1[datos[i]]);
            if (producto1[datos[i]]=="true") {
              cobrado= producto1[datos[i]]
            }else{
              cobrado="false";
            }
            
          }
 
          
        }
        lista.innerHTML+='<div class="row"> <div class="col">'+conceptoText+'</div> <div class="col">'+importeText+'</div> <div class="col">'+ivaText+'%</div><div class="col">'+ivaResultado+'</div><div class="col">'+irpf+'</div><div class="col">'+cobrado+'</div></div><hr>';

 
        let entrada=Object.entries(producto1).forEach((clave,valor)=>{
          console.log(clave+":"+valor);
        }
        )
  });

 
 };
 
function guardar(params) {
  var miAlumnoJson = localStorage.getItem("alumnoJSON1");
  if (miAlumnoJson) { 
    nuevoObjeto=JSON.parse(miAlumnoJson); 
/*     lista.innerHTML ="Hola Alumno " +nuevoObjeto.nombre; */

  }else
  {
    console.log("guardado");
    miAlumnoJson=JSON.stringify(producto1);
  localStorage.setItem("alumnoJSON1", miAlumnoJson);
  }
}