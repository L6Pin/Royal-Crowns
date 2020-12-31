import './css/style.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav.js';
import Index from './sections/index';
import FindMember from './sections/findMember';
import Form from './sections/form';
import Teams from './sections/teams';
import FoundMember from './sections/foundMember';
import Clubs from './sections/clubs';
import SingleClub from './sections/singleClub';


function App() {
  return (
    
    <Router>
      
        <Nav />
      
        <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/form' component={Form} />
        <Route path='/teams' component={Teams} />
        <Route path='/findMember' exact component={FindMember} />
        <Route path='/findMember/:id' component={FoundMember} />
        <Route path='/clubs' exact component={Clubs} />
        <Route path='/clubs/:id' exact component={SingleClub} />
        </Switch>

    </Router>
  );
}

export default App;
