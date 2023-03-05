function mostrarSenha(senha) {
    if (!senha) var x = document.getElementById("senha");
    else var x = document.getElementById(senha);

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
  }
}