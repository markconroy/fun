class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    let element = document.createElement('header');
    element.classList.add('header');
    element.innerHTML = `
    <div class="layout-contained">
      <div class="header__inner">
        <div class="logo">Logo</div>
        <nav>Menu</nav>
      </div>
    </div>
    `;
    this.shadowRoot.appendChild(element);
  }
}

window.customElements.define('prfc-header', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="layout-contained padding-horizontal">
          <div class="footer__inner">
            <div class="footer__item footer__item--postal">Postal Address</div>
            <div class="footer__item footer__item--contact">Contact</div>
            <div class="footer__item footer__item--pitch">Pitch Address</div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('prfc-footer', Footer);
