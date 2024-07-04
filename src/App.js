import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';




function App() {
  return (
    <Router>
    <Nav/>
    {/* <Header/> */}
    <Main/>
    <Menu/>
    <Footer/>
    </Router>
  );
}

export default App;
