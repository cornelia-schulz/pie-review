import { KeyboardEvent, useState } from 'react';
import './header.scss';
import logo from '../../assets/pie-cyan-logo.png';
import magnifier from '../../assets/magnifying-glass-cream.png';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useLocationContext } from '../../hooks/useLocationContext';

function Header() {
  const [location, setLocation] = useState('');
  const locationContext = useLocationContext();
  const [placeholder] = useState('Enter a city or town');
  const provider = new OpenStreetMapProvider();

  async function updateLocation() {
    if (location) {
      const results = await provider.search({ query: location });
      let tempLocation = results[0].label.split(',')
      // debugger;
      locationContext.setPosition({lng: results[0].x, lat: results[0].y});
      locationContext.setLocationName(tempLocation[0]);
    }
    else {
      // change placeholder text to red
    }
  }

  function handleKeyDown(e:KeyboardEvent) {
    if (e.key === 'Enter') {
      updateLocation();
    }
  }

  return (
    <header className="header">
      <a className="logo-link" href="/">
        <img src={logo} alt="pie review logo" className="logo" />
      </a>
      <div className="searchbar" role="search">
        <input
          className="searchbar-input"
          id="location"
          name="location"
          onChange={e => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          type="text"
        />
        <button className="search-button" onClick={updateLocation} onKeyDown={handleKeyDown}>
          <img src={magnifier} alt="search for location" />
        </button>
      </div>
      <nav className="navigation">
          {/* menu */}
      </nav>
    </header>
    );
}

export default Header;