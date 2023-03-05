class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <footer>
            <div class="left-footer">
                <a href="index.html">
                    <img src="img/LOGO.svg" class = "logo" alt="">
                </a>
            </div>

            <div class="center-footer">
                <ul class="footer-list">
                    <a class="nav-bar-a" href="lista-todos-artigos.html">
                        <li class="text nav-bar-item footer-menu-title footer-menu-title-a">Artigos</li>
                    </a>
                    <a class="nav-bar-a" href="lista-todos-artigos.html">
                        <li class="text nav-bar-item footer-menu-item">Ver todos os artigos</li>
                    </a>
                </ul>
                <ul class="footer-list">
                    <a class="nav-bar-a" href="lista-todos-eventos.html">
                        <li class="text nav-bar-item footer-menu-title footer-menu-title-a">Eventos</li>
                    </a>
                    <a class="nav-bar-a" href="lista-todos-eventos.html">
                        <li class="text nav-bar-item footer-menu-item">Ver todos os eventos</li>
                    </a>
                </ul>
                <ul class="footer-list">
                    <a class="nav-bar-a" href="#">
                        <li class="text nav-bar-item footer-menu-title footer-menu-title-a">Sobre</li>
                    </a>
                    <a class="nav-bar-a" href="#">
                        <li class="text nav-bar-item footer-menu-item">O que é a plataforma?</li>
                        <a class="nav-bar-a" href="#">
                            <li class="text nav-bar-item footer-menu-item">Desenvolvedores</li>
                        </a>
                    </a>
                </ul>
            </div>

            <div class="right">

            </div>
        </footer>
    </div>`
    }
  }

  customElements.define('footer-c', Footer);