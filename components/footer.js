class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.8);
          color: white;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(124, 58, 237, 0.3);
          backdrop-filter: blur(8px);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        .social-links a {
          color: white;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #8B5CF6;
        }
        .copyright {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="https://linkedin.com" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="https://github.com" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="mailto:contact@example.com" aria-label="Email"><i data-feather="mail"></i></a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Oscar Windrath-Carr. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);