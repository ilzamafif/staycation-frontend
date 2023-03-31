import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from "./pages/DetailsPage";
import Example from "./pages/Example";
import Checkout from "./pages/Checkout";

import "./assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;