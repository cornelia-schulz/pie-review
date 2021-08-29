import React, { useState } from 'react';
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
    // console.log(results); // » [{}, {}, {}, ...]
    locationContext.setPosition({lon: results[0].x, lat: results[0].y});
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