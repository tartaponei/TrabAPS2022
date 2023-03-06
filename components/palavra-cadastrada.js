class Palavra_Cadastrada extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="palavra-cadastrada">
    <p class="info destacada-regular" id="palavra">Palavra</p>
</div>`
    }
  }

customElements.define('palavra-cadastrado', Palavra_Cadastrada);