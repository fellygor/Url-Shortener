import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container header-container">
      <div className="nav-left">
        <h1 className="logo">Shortly</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '30px' }}>
            <li className="nav-link">Features</li>
            <li className="nav-link">Pricing</li>
            <li className="nav-link">Resources</li>
          </ul>
        </nav>
      </div>

      <div className="nav-right">
        <span className="nav-link">Login</span>
        <button className="btn-signup">Sign Up</button>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="mobile-menu-active">
          <ul>
            <li className="nav-link">Features</li>
            <li className="nav-link">Pricing</li>
            <li className="nav-link">Resources</li>
          </ul>
          <hr />
          <span className="nav-link">Login</span>
          <button className="btn-signup">Sign Up</button>
        </div>
      )}
    </header>
  );
}