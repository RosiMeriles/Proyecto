
function validarEnviar(){ 
    parrafo = document.getElementById("error")
    var correo = document.formulario.correo.value
    const valCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    // ANALIZO EL NOMBRE
    if(document.formulario.nombre.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.formulario.nombre.focus()
        parrafo.innerHTML = "Nombre completo incorrecto."
        return
    }
    // FALTA VER CÓMO VALIDAR "CHECKBOX"
    // if(document.formulario.genero.checked == 0){
    //     // alert("Debe seleccionar un motivo de su contacto.")
    //     document.formulario.genero.focus()
    //     parrafo.innerHTML = "Opción seleccionada."
    //     return
    // }

    
    if(document.formulario.pais.selectedIndex == 0){
        // alert("Debe seleccionar un país.")
        document.formulario.pais.focus()
        parrafo.innerHTML = "Seleccion incorrecta."
        return 
    }

    if(document.formulario.correo.value.length <= 2){
        // alert("Ingrese un correo correcto.")
        document.formulario.correo.focus()
        parrafo.innerHTML = "Correo incorrecto."
        return
    }
    if (!valCorreo.test(correo)) {
        document.formulario.correo.focus();
        parrafo.innerHTML = "Por favor, ingrese un correo electrónico válido.";
        return
    }

    if(document.formulario.usuario.value.length <= 2){
        // alert("Ingrese un usuario correcto.")
        document.formulario.usuario.focus()
        parrafo.innerHTML = "Usuario incorrecto."
        return
    }
   
    if(document.formulario.contrasena.value.length <= 2){
        // alert("Ingrese una contraseña correcta.")
        document.formulario.contrasena.focus()
        parrafo.innerHTML = "Contraseña incorrecta."
        return
    }

    if(document.formulario.confirmarContrasena.value.length <= 2){
        // alert("Confirmar una contraseña.")
        document.formulario.confirmarContrasena.focus()
        parrafo.innerHTML = "Contraseña no válida."
        return
    }

    if(document.formulario.contrasena.value != document.formulario.confirmarContrasena.value){
        // alert("Confirmar una contraseña.")
        document.formulario.confirmarContrasena.focus()
        parrafo.innerHTML = "Ambas contraseñas deben ser iguales."
        return
    }
    parrafo.style.color="blue"
    parrafo.innerHTML = "Gracias por completar el formulario!"
    document.formulario.submit()

}
    
    