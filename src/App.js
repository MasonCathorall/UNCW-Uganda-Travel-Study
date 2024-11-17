import './App.css';
import Home from './components/Home';
import Excursions from './components/Excursions';
import Uganda from './components/Uganda/Uganda';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import PastStudents from './components/PastStudents';

const App = () => {
  return (
      <div className="app">
        <Routes basename={window.location.pathname || ''}> 
          <Route path="/" element={<Home />} />
          <Route path="/uganda" element={<Uganda />} />
          <Route path="/excursions" element={<Excursions />} />
          <Route path="/paststudents" element={<PastStudents />} />
        </Routes>
      </div>
  );
};

export default App;
