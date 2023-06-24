import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Appointmentform from "./components/Appointmentform"
import DonateForm from "./components/DonateForm"
import About from "./components/About"
import Error404page from './components/Error404page';

function App() {
  return (
   <>
     <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/appointment" element={<Appointmentform/>}></Route>
            <Route path="/donate" element={<DonateForm/>}></Route>
            <Route path="/*" element={<Error404page/>}></Route>
          </Routes>
          <Footer/>
        </Router>
   </>
  );
}

export default App;
