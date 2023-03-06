function incluirCadastrados() {
    const trilha = document.getElementById('nome-trilha').value;
    const div = document.getElementById('cadastrados')

    const trilhaCadastrada = document.createElement('trilha-cadastrada');
    trilhaCadastrada.innerHTML = '<p class="info destacada-regular" id="trilha">' + trilha + '</p>';
    div.appendChild(trilhaCadastrada);

}