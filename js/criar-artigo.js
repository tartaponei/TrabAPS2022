function incluirCadastrados() {
    const palavra = document.getElementById('palavras-chave').value;
    const div = document.getElementById('cadastrados')

    const palavraCadastrada = document.createElement('palavra-cadastrada');
    palavraCadastrada.innerHTML = '<p class="info destacada-regular" id="palavra">' + palavra + '</p>';
    div.appendChild(palavraCadastrada);

}