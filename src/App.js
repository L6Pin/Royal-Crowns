import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav.js';
import Index from './sections/index';
import FindMember from './sections/findMember';
import Form from './sections/form';
import Teams from './sections/teams';



function App() {
  return (
    <Router>
      
        <Nav />
        <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/form' component={Form} />
        <Route path='/teams' component={Teams} />
        <Route path='/find-member' component={FindMember} />
        </Switch>
    </Router>
  );
}

export default App;
