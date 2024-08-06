import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';




function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
    <Main/>
    <Menu/>
    <Footer />
    </Router>
  );
}

export default App;
