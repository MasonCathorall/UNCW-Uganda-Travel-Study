import './App.css';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './components/Home';
import Uganda from './components/Uganda';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <div className="app">
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/uganda" element={<Uganda />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
