import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Uganda from './components/Uganda';
import Excursions from './components/Excursions';
import PastStudents from './components/PastStudents';

const routes = (
  <BrowserRouter basename={window.location.pathname || ''}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/uganda" component={Uganda} />
      <Route path="/excursions" component={Excursions} />
      <Route path="/paststudents" component={PastStudents} />
    </Switch>
  </BrowserRouter>
);

export default routes;