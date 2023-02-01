import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;