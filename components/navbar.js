class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.95);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(8px);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .logo {
          color: #1e40af;
          font-weight: bold;
          font-size: 1.5rem;
          text-decoration: none;
        }
ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #1e40af;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
        }
        a:hover {
          color: #3b82f6;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s ease;
        }
a:hover::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            padding: 1rem;
            border-bottom: 1px solid rgba(59, 130, 246, 0.3);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
ul.show {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">Oscar Windrath-Carr</a>
        <button class="mobile-menu-btn" id="menuBtn">
          <i data-feather="menu"></i>
        </button>
        <ul id="navMenu">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;
    
    // Mobile menu functionality
    const menuBtn = this.shadowRoot.getElementById('menuBtn');
    const navMenu = this.shadowRoot.getElementById('navMenu');
    
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);