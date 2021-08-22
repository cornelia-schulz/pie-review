import logo from '../assets/pie-cyan-logo.png';
import magnifier from '../assets/magnifying-glass-cream.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="pie review logo" className="logo" />
      <div className="searchbar">
        <input type="text" id="location" name="location" className="searchbar-input" />
        <button className="button">
        <img src={magnifier} alt="search for location" />
        </button>
      </div>
      <nav className="navigation">
          menu
      </nav>
    </header>
    );
}

export default Header;