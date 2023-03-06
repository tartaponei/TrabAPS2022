class Trilha_Cadastrada extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="trilha-cadastrada">
    <p class="info destacada-regular" id="trilha">Trilha</p>
</div>`
    }
  }

customElements.define('trilha-cadastrada', Trilha_Cadastrada);