import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Example from "./pages/Example";
import './assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;