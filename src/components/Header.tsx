import React, { KeyboardEvent, useState } from 'react';
import logo from '../assets/pie-cyan-logo.png';
import magnifier from '../assets/magnifying-glass-cream.png';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useLocationContext } from '../hooks/useLocationContext';

function Header() {
  const [location, setLocation] = useState('');
  const locationContext = useLocationContext();

  const provider = new OpenStreetMapProvider();

  async function getLocation() {
    const results = await provider.search({ query: location });
    // console.log(results);
    locationContext.setLocationName(results[0].label);
    locationContext.setPosition({lng: results[0].x, lat: results[0].y});
  }

  function handleKeyDown(e:KeyboardEvent) {
    if (e.key === 'Enter') {
      getLocation();
    }
  }

  return (
    <header className="header">
      <img src={logo} alt="pie review logo" className="logo" />
      <div className="searchbar">
        <input
          className="searchbar-input"
          id="location"
          name="location"
          onChange={e => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        />
        <button className="button" onClick={getLocation}>
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