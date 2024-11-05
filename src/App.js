import './App.css';
import Home from './components/Home';
import Excursions from './components/Excursions';
import Uganda from './components/Uganda/Uganda';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
      <div className="app">
        <Routes basename={'/UNCW-Uganda-Travel-Study'}> 
          <Route path="/" element={<Home />} />
          <Route path="/UNCW-Uganda-Travel-Study" element={<Home />} />
          <Route path="/uganda" element={<Uganda />} />
          <Route path="/excursions" element={<Excursions />} />
        </Routes>
      </div>
  );
};

export default App;
