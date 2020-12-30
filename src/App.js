import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav.js';
import Index from './sections/index';
import FindMember from './sections/findMember';
import Form from './sections/form';
import Teams from './sections/teams';
import FoundMember from './sections/foundMember';



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
        </Switch>

    </Router>
  );
}

export default App;
