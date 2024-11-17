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
        <Routes basename={process.env.PUBLIC_URL}> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/uganda" element={<Uganda />} />
          <Route exact path="/excursions" element={<Excursions />} />
          <Route exact path="/paststudents" element={<PastStudents />} />
        </Routes>
      </div>
  );
};

export default App;
