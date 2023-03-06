class Artigo_Cadastrado extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="artigo-cadastrado">
    <p class="info destacada-regular">Nome</p>
</div>`
    }
  }

  customElements.define('artigo-cadastrado', Artigo_Cadastrado);