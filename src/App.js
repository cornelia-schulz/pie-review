import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { LocationContext } from './hooks/useLocationContext';
import Home from './pages/Home/Home';

function App() {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState('');
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
