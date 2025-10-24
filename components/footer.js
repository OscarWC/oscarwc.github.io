class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #f8fafc;
          color: #1e293b;
          padding: 2rem;
          text-align: center;
          border-top: 1px solid rgba(59, 130, 246, 0.3);
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
          color: #1e40af;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #3b82f6;
        }
        .copyright {
          font-size: 0.875rem;
          color: #64748b;
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