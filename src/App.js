import './App.css';
import Home from './Pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
