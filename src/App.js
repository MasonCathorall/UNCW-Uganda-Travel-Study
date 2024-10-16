import './App.css';
import Home from './components/Home';
import Excursions from './components/Excursions';
import Uganda from './components/Uganda/Uganda';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/uganda" element={<Uganda />} />
          <Route path="/excursions" element={<Excursions />} />
        </Routes>
      </div>
  );
};

export default App;
