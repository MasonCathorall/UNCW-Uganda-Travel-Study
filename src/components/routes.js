import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Uganda from './components/Uganda';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/uganda" component={Uganda} />
    </Switch>
  </BrowserRouter>
);

export default routes;