import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Services from './components/Services';
import Contactus from './components/Contactus';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path='/about'exact  element={<About/>}></Route>
        <Route path='/service'exact  element={<Services/>}></Route>
        <Route path='/contact'exact  element={<Contactus/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
