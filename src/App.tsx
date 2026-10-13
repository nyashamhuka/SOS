import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learning from './pages/Learning';
import SchoolLife from './pages/SchoolLife';
import Enrol from './pages/Enrol';
import Community from './pages/Community';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-branding">
          <NavLink to="/" className="logo">
            <span className="logo-mark" aria-hidden="true">S</span>
            <span className="logo-name">SOS School</span>
          </NavLink>
        </div>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/learning" onClick={() => setMenuOpen(false)}>Learning</NavLink>
          <NavLink to="/school-life" onClick={() => setMenuOpen(false)}>School Life</NavLink>
          <NavLink to="/enrol" onClick={() => setMenuOpen(false)}>Enrol</NavLink>
          <NavLink to="/community" onClick={() => setMenuOpen(false)}>Community</NavLink>
          <NavLink to="/news" onClick={() => setMenuOpen(false)}>News</NavLink>
          <NavLink to="/careers" onClick={() => setMenuOpen(false)}>Careers</NavLink>
        </nav>
        <div className="header-actions">
          <NavLink to="/contact" className="button button-primary">
            Book a Tour
          </NavLink>
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/school-life" element={<SchoolLife />} />
          <Route path="/enrol" element={<Enrol />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-branding">
          <p>&copy; 2026 SOS School. All rights reserved.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/learning">Learning</NavLink>
          <NavLink to="/enrol">Enrol</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
