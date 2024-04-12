
const btnRegistrarUsuario = document.querySelector('.btnIni');
const claveUno = document.querySelector('#password');
const correo = document.querySelector('#correo');
const terminoCondiciones = document.querySelector('#check1');
/* const miForm = document.querySelector('#loginForm'); */

cargarEventos();

function cargarEventos(){
    btnRegistrarUsuario.addEventListener('click', validarDatos);
}

function validarDatos(evt){
    evt.preventDefault();
    //console.log(correo);
    if ( validarCorreo(correo.value) == null ){
        alert("Debe escribir un correo válido");
        correo.focus();
    }else{
        if (claveUno.value.length >= 8){
            if (terminoCondiciones.checked){
                // miForm.action="http://localhost:4000/api/clientes/registrar";
                // miForm.submit(); // Se envia el formulario
                enviarDatos();
            }
            else{
                terminoCondiciones.focus();
            }
        }else{
            alert("La contraseña debe tener al menos 8 caracteres");
            claveUno.focus();
        }   
    }
}

// Función para validar el correo
function validarCorreo(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   }


function enviarDatos(){

    url = `http://localhost:4000/api/clientes/autenticar`;

    fetch(url,{
                method: 'POST',

                headers: { "Content-Type": "application/json", },

                body: JSON.stringify({ 
                                        correo: correo.value,
                                        clave: claveUno.value
                                     })

        })
        .then( respuesta => {
            return respuesta.json();
        } )
        .then( resultado => {
            console.log(resultado)
            alert(resultado.mensaje);
        })
}

