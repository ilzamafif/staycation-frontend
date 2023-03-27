import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' Component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
