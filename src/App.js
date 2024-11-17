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
        <Routes basename="/UNCW-Uganda-Travel-Study"> 
          <Route exact path="/" render={<Home />} />
          <Route path="/uganda" render={<Uganda />} />
          <Route path="/excursions" render={<Excursions />} />
          <Route path="/paststudents" render={<PastStudents />} />
        </Routes>
      </div>
  );
};

export default App;
