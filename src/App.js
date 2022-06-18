import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { LocationContext } from './hooks/useLocationContext';
import Home from './pages/Home/Home';

function App() {
  const [position, setPosition] = useState({lat: -43.5258654860019, lng: 172.61722095547762});
  const [locationName, setLocationName] = useState('Christchurch');
  const [bounds, setBounds] = useState(null);

  return (
    
    <Router>
      <LocationContext.Provider value= {{ 
        position, setPosition,
        locationName, setLocationName,
        bounds, setBounds
      }}>
        <Route path="/" component={Home} />
      </LocationContext.Provider>
    </Router>
  );
}

export default App;
