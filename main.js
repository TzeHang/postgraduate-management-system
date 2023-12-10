class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="logo-left">
                <img src="img/upm.png" alt="Left Logo">
            </div>
            <div class="logo-right">
                <img src="img/csit.png" alt="Right Logo">
            </div>
        </header>
        `;
    }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="social-media">
                <a href="https://www.facebook.com/fcsitupm"><img src="img/facebook-icon.png" alt="Facebook"></a>
                <a href="https://www.twitter.com"><img src="twitter-icon.png" alt="Twitter"></a>
                <a href="https://www.instagram.com"><img src="img/instagram-icon.png" alt="Instagram"></a>
            </div>
            <p>CSIT &copy; 2023</p>
        </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);
