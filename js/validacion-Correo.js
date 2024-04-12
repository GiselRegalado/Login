const btnIni=document.querySelector('.btnIni')
btnIni.addEventListener('click',(e)=>{
    e.preventDefault()

    const miEmail=document.querySelector('.mi-email').value
    emailValido=validarEmail(miEmail)
    if(!emailValido){
        alert('Email incorrecto, teclee un email válido')
        miEmail.focus()
        return
    }

    const miPassword=document.querySelector('.mi-password').value
    passwordValido=validarPassword(miPassword)
    if(!passwordValido){
        alert('Contraseña incorrecta, debe tener al menos 8 caracteres')
        miPassword.focus()
        return
    }

    function redirectToIndex(){
        windows.location.href='../Guaru/Inicio/index.html';
    }

    
})

function validarEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

function validarPassword(password){
    if(password.length>=8){
        return true
    }   
    else   
        return false
}