import './App.css';
import Home from './components/Home';
import Excursions from './components/Excursions';
import Uganda from './components/Uganda';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import PastStudents from './components/PastStudents';
import Scholarship from './components/Scholarship';

const App = () => {
  
  return (
      <div className="app">
        <Routes basename={window.location.pathname || ''}> 
          <Route path="/" exact element={<Home />} />
          <Route path="/uganda" element={<Uganda />} />
          <Route path="/excursions" element={<Excursions />} />
          <Route path="/paststudents" element={<PastStudents />} />
          <Route path="/scholarship" element={<Scholarship />} />
        </Routes>
      </div>
  );
};

export default App;
