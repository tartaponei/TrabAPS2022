class Autor_Cadastrado extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="autor-cadastrado">
    <p class="info destacada-regular">Nome</p>
</div>`
    }
  }

  customElements.define('autor-cadastrado', Autor_Cadastrado);