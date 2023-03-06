function incluirCadastrados() {
    const palavra = document.getElementById('palavras-chave').value;
    const div = document.getElementById('cadastrados')

    const palavraCadastrada = document.createElement('palavra-cadastrada');
    palavraCadastrada.innerHTML = '<p class="info destacada-regular" id="palavra">' + palavra + '</p>';
    div.appendChild(palavraCadastrada);

}

function adicionarFormNovoArtigo() {
    const div = document.getElementById('novo-artigo');
    console.log(div);

    const criarArtigo = document.createElement('criar-artigo');
    div.appendChild(criarArtigo);
}

function incluirArtigosCadastrados() {
    const nome = document.getElementById('titulo-novo-artigo').value;
    const div = document.getElementById('cadastrados')

    const artigoCadastrado = document.createElement('artigo-cadastrado');
    artigoCadastrado.innerHTML = '<p class="info destacada-regular" id="nome">' + nome + '</p>';
    div.appendChild(artigoCadastrado);

}