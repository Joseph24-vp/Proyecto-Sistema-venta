function frmLogin(e){
    e.preventDefault(); 
    const usuario = document.getElementById("usuario"); 
    const clave = document.getElementById("clave"); 
    
    // Quitamos por si acaso ya lo tenía
    usuario.classList.remove("is-invalid");
    clave.classList.remove("is-invalid");

    if (usuario.value == "") {
        usuario.classList.add("is-invalid"); // Aquí es donde se pone el borde rojo
        usuario.focus();
    } else if (clave.value == "") {
        clave.classList.add("is-invalid"); // Aquí es donde se pone el borde rojo
        clave.focus();
    }
}