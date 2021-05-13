import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, TeamPage, EditorsPage } from './pages';
import { Navbar, Footer } from './shared';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/team' component={TeamPage} />
          <Route exact path='/Editors' component={EditorsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
