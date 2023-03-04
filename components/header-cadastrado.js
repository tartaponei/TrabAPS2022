class Header_Cadastrado extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="header cadastrador">
        <header>
            <div class="grid-item left">
                <a href="index.html">
                    <img src="img/LOGO.svg" class = "logo" alt="">
                </a>
                
            </div>
            
            <div class="grid-item center">
                <nav id="nav-bar">
                    <ul id="center-menu">
                        <a class="nav-bar-a" href="lista-todos-artigos.html">
                            <li class="nav-bar-item text">Artigos</li>
                        </a>
                        <a class="nav-bar-a" href="lista-todos-eventos.html">
                            <li class="nav-bar-item text">Eventos</li>
                        </a>
                        <a class="nav-bar-a" href="#">
                            <li class="nav-bar-item text">Sobre</li>
                        </a>                       
                    </ul>
                </nav>
            </div>
           
            <div class="grid-item right">
                <ul id="side-menu">
                    <div class="botao-adicionar">
                        <li class="text nav-bar-item adicionar">
                            <button class="adicionar">
                                <img src="./img/icon-adicionar.svg" onmouseover="this.src='./img/icon-adicionar-hover.svg';" onmouseout="this.src='./img/icon-adicionar.svg';" alt="">

                                <div class="dropdown-content adicionar">
                                    <ul class="dropdown-list adicionar">
                                        <a href="cadastrar-autor.html" class="text dropdown-item">
                                            <li>Novo autor/artigo</li>
                                        </a>
                                        <a href="cadastrar-evento.html" class="text dropdown-item">
                                            <li>Novo evento</li>
                                        </a>
                                        <a href="" class="text dropdown-item">
                                            <li>Visualizar meus eventos</li>
                                        </a>
                                        <a href="" class="text dropdown-item">
                                            <li>Visualizar meus artigos</li>
                                        </a>
                                    </ul>
                                </div>
                            </button>
                            
                        </li>
                    </div>
                    
                    <div class="botao-config">
                        <li class="text nav-bar-item config">
                            <button class="config">
                                <img src="./img/icon-config.svg" onmouseover="this.src='./img/icon-config-hover.svg';" onmouseout="this.src='./img/icon-config.svg';" alt="">

                                <div class="dropdown-content config">
                                    <ul class="dropdown-list config">
                                        <a href="" class="text dropdown-item">
                                            <li>Meus dados</li>
                                        </a>
                                    </ul>
                                    <ul class="dropdown-list config">
                                        <a href="" class="text dropdown-item">
                                            <li>Sair</li>
                                        </a>
                                    </ul>
                                </div>
                            </button>
                        </li>
                    </div>
                    
            </ul>
            </div>
        </header>
    </div>
`
    }
  }

  customElements.define('header-cadastrado', Header_Cadastrado);