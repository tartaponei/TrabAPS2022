class Criar_Artigo extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="novo-artigo">
    <div class="field-area">
        <label for="titulo-novo-artigo" class="text label-form">Título do artigo</label>
        <input type="text" name="titulo-novo-artigo" id="titulo-novo-artigo">
    </div>

    <div class="field-area">
        <label for="resumo" class="text label-form">Resumo do artigo</label>
        <textarea name="resumo" id="resumo" cols="30" rows="10"></textarea> 
    </div>

    <div class="data-palavras">
        <div class="field-area">
            <label for="data" class="text label-form">Data de publicação</label>
            <input type="date" name="data" id="data">
        </div>

        <div class="palavras-chave">
            <div class="field-area">
                <label for="palavras-chave" class="text label-form">Palavras chave</label>
                <input type="text" name="palavras-chave" id="palavras-chave">
            </div>
        </div>
    </div>

    <div class="area-cadastrados">
        <a onclick="incluirCadastrados()" class="adicionar-palavra botao pequeno azul">Adicionar</a>
        <div id="cadastrados"></div>
    </div>

    <div class="field-area">
        <label for="pdf" class="text label-form">Arquivo PDF do artigo</label>
        <input type="file" name="pdf" id="pdf" accpet=".pdf">
    </div>

    <a onclick="incluirArtigosCadastrados()" class="botao grande azul salvar-artigo">Salvar</a>
</div>`
    }
  }

  customElements.define('criar-artigo', Criar_Artigo);