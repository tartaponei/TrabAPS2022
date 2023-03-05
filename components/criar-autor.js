class Criar_Autor extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="novo-autor">
    <div class="field-area">
        <label for="nome-autor" class="text label-form">Nome completo do autor</label>
        <input type="text" name="nome-novo-autor" id="nome-novo-autor">
    </div>

    <div class="cpf-email">
        <div class="field-area">
            <label for="cpf-autor" class="text label-form">CPF do autor</label>
            <input type="number" maxlength="11" minlength="11" name="cpf-autor" id="cpf-autor">
        </div>
        <div class="field-area">
            <label for="email-autor" class="text label-form">E-mail do autor</label>
            <input type="email" name="email-autor" id="email-autor">
        </div>
    </div>
    <div class="data-sigla-vinculo">
        <div class="field-area">
            <label for="data-nasc" class="text label-form">Data de nascimento do autor</label>
            <input type="date" name="data-nasc" id="data-nasc">
        </div> 

        <div class="field-area">
            <label for="sigla-instituicao" class="text label-form">Sigla da instituição vinculada</label>
            <input type="text" name="sigla-instituicao" id="sigla-instituicao">
        </div>
        
        <div class="field-area">
            <label for="vinculo" class="label-form text">Vínculo</label>
            <div class="select">
                <select class="text select" name="vinculo" id="vinculo">
                    <option value="docente" class="combo-box-item text"><span class="text">Docente</span></option>
                    <option value="discente" class="combo-box-item text"><span class="text">Discente</span></option>
                </select>
            </div>
        </div>
    </div>

    <div class="grau-cv">
        <div class="field-area">
            <label for="grau-autor" class="label-form text">Grau de escolaridade</label>
            <div class="select">
                <select class="text select" name="grau-autor" id="grau-autor">
                    <option value="graduado" class="combo-box-item text"><span class="text">Graduado</span></option>
                    <option value="pos-graduado" class="combo-box-item text"><span class="text">Pós-graduado</span></option>
                    <option value="mestre" class="combo-box-item text"><span class="text">Mestre</span></option>
                    <option value="doutor" class="combo-box-item text"><span class="text">Doutor</span></option>
                    <option value="pos-doc" class="combo-box-item text"><span class="text">Pós-doutorado</span></option>
                </select>
            </div>
        </div>

        <div class="field-area">
            <label for="url" class="text label-form">Link do currículo Lattes</label>
            <input type="url" name="link-cv" id="link-cv">
        </div>

        <a onclick="incluirCadastrados()" class="botao grande azul">Salvar</a>
    </div>

</div>`
    }
  }

  customElements.define('criar-autor', Criar_Autor);