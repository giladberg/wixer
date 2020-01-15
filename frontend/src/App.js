import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import HomePage from './pages/HomePage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Templates from './pages/Templates.jsx';
import WebsiteEdit from './pages/WebsiteEdit.jsx';

function App() {
  return (
    <main>
     <Router history={history}>
       <Switch>
          <Route component={HomePage} path="/" exact></Route>
          <Route component={Dashboard} path="/dashboard" exact></Route>
          <Route component={Templates} path="/templates" exact></Route>
          <Route component={WebsiteEdit} path="/page/edit" ></Route>
          {/* <Route component={ToyDetails} path="/toys/:_id" exact></Route>
          <Route component={ToyEdit} path="/toys/edit/:_id" exact></Route>
          <Route component={ToyEdit} path="/toys/edit" exact></Route>
          <Route component={NotFound} path="/"></Route> */}
       </Switch>
    </Router>
    </main>
  );
}

export default App;
