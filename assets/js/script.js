/*
  DESAFIO:
  1. Si el gasto es > 150 USD poner msg  => Ok
  2. Poner campo descripcion             => Ok
  3. Poner boton EDITAR                  => Ok
  4. Poner boton ACTUALIZAR y ocultar AGREGAR => Ok
*/

let listaNombresGastos = [];
let listaValoresGastos = [];
var curPos = -1;


function clickBoton()
{
  let nombreGasto = document.getElementById("nombreGasto").value;
  let valorGasto  = document.getElementById("valorGasto").value;

//  console.log(nombreGasto);
//  console.log(valorGasto);

  listaNombresGastos.push(nombreGasto);
  listaValoresGastos.push(valorGasto);

  console.log(listaNombresGastos);
  console.log(listaValoresGastos);

  if( valorGasto > 150.0)
      alert("\n ATENCION !!! \n el gasto en " + nombreGasto + " supera los 150 dólares !!");

  actualizarListaGastos();
}


function actualizarListaGastos() 
{
   const listaElementos = document.getElementById("listaDeGastos");
   const totalElementos = document.getElementById('totalGastos');
   let htmlLista = ``;
   let totalGastos = 0;

   listaNombresGastos.forEach((elemento, posicion) => {
   const valorGasto = Number( listaValoresGastos[posicion]);   

   htmlLista += `<li> <span> ${elemento} - USD ${valorGasto.toFixed(2)} </span> 
                <span id="botones">               
                 <button class='med-upd' onclick="editarGasto(${posicion});"> Editar</button>&nbsp; 
                 <button class='med-del' onclick="eliminarGasto(${posicion});"> Eliminar</button>
                </span>
                </li>`;
      totalGastos += Number(valorGasto);  // convierto a real
      limpiar();
   });

   listaElementos.innerHTML = htmlLista;
   totalElementos.innerHTML = totalGastos.toFixed(2);
}


function limpiar() 
{
  document.getElementById("nombreGasto").value = "";
  document.getElementById("descGasto").value = "";
  document.getElementById("valorGasto").value = "";
}


function eliminarGasto( posicion ) 
{
  listaNombresGastos.splice( posicion, 1);
  listaValoresGastos.splice( posicion, 1);
  actualizarListaGastos();
}


function editarGasto( posicion ) 
{
  document.getElementById("nombreGasto").value = listaNombresGastos[ posicion];
  document.getElementById("valorGasto").value  = listaValoresGastos[ posicion];
  document.getElementById("botonFormulario").style.visibility = "hidden";
  document.getElementById("Actualizar").style.display = "block";
  curPos = posicion;
}

function actualizarGasto()
{
  document.getElementById("botonFormulario").style.visibility = "visible";
  document.getElementById("Actualizar").style.display = "none";
 // console.log("curPos =" + curPos);

  if( curPos != -1) {
     let nombreGasto = document.getElementById("nombreGasto").value;
     let valorGasto  = document.getElementById("valorGasto").value;
     listaNombresGastos[ curPos] = nombreGasto;
     listaValoresGastos[ curPos] = valorGasto;
  }
  actualizarListaGastos();
}
