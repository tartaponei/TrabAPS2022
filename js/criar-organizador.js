function adicionarFormNovoOrganizador() {
    const div = document.getElementById('novo-organizador');
    console.log(div);

    const criarOrganizador = document.createElement('criar-organizador');
    div.appendChild(criarOrganizador);
}

function incluirCadastrados() {
    const nome = document.getElementById('nome-novo-organizador').value;
    const div = document.getElementById('cadastrados')

    const organizadorCadastrado = document.createElement('organizador-cadastrado');
    organizadorCadastrado.innerHTML = '<p class="info destacada-regular" id="nome">' + nome + '</p>';
    div.appendChild(organizadorCadastrado);

}