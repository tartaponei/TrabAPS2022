function adicionarFormNovoAutor() {
    const div = document.getElementById('novo-autor');
    console.log(div);

    const criarAutor = document.createElement('criar-autor');
    div.appendChild(criarAutor);
}

function incluirCadastrados() {
    const nome = document.getElementById('nome-novo-autor').value;
    const div = document.getElementById('cadastrados')

    const autorCadastrado = document.createElement('autor-cadastrado');
    autorCadastrado.innerHTML = '<p class="info destacada-regular" id="nome">' + nome + '</p>';
    div.appendChild(autorCadastrado);

}