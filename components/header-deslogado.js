class Header_Deslogado extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="header deslogado">
            <header>
                <div class="grid-item left">
                    <a href="index.html">
                        <img src="img/LOGO.svg" class = "logo" alt="">
                    </a>
                    
                </div>
                
                <div class="grid-item center">
                    <nav id="nav-bar">
                        <ul id="center-menu">
                            <a class="nav-bar-a" href="#">
                                <li class="nav-bar-item text">Artigos</li>
                            </a>
                            <a class="nav-bar-a" href="#">
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
                        <a class="nav-bar-a" href="#">
                            <li class="text nav-bar-item">Área do Cadastrador</li>
                        </a>
                    </ul>
                </div>
            </header>
        </div>`
    }
  }

  customElements.define('header-deslogado', Header_Deslogado);