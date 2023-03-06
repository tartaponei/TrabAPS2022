class Organizador_Cadastrado extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="organizador-cadastrado">
    <p class="info destacada-regular" id="nome">Nome</p>
</div>`
    }
  }

  customElements.define('autor-cadastrado', Organizador_Cadastrado);