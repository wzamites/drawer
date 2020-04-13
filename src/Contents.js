import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Contents extends React.Component {
  render() {
    return (
      <Router>
          <Route path='/' exact render={() => ( <h1>Home Page</h1> )}/>
          <Route path='/bugs' exact render={() =>  ( <h1>Bugs Page</h1>  ) }/>
          <Route path='/epics' exact render={() => ( <h1>Epic Page</h1>  )}/>
      </Router>
    );
  }
}

export default Contents;
