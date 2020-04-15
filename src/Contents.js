import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Contents extends React.Component {
  render() {
    return (
      <Router>
          <Route path='/' exact render={() => ( <h1>Home Page</h1> )}/>
          <Route path='/Create' exact render={() => ( <h1>Accordion Placeholder Page</h1> )}/>
          <Route path='/Products' exact render={() =>  ( <h1>Products Page</h1>  ) }/>
          <Route path='/Teams' exact render={() => ( <h1>Teams Page</h1>  )}/>
          <Route path='/Quality' exact render={() => ( <h1>Quality Page</h1>  )}/>
          <Route path='/Collaboration' exact render={() => ( <h1>Collaboration Page</h1>  )}/>
          <Route path='/Reports' exact render={() => ( <h1>Reports Page</h1>  )}/>
      </Router>
    );
  }
}

export default Contents;
