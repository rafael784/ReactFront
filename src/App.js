import React, { Component } from 'react';
import {  Switch, Route, Redirect } from 'react-router-dom';



import Home  from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import { isAuthenticated } from './auth';

const PrivateRoute = ({component:Component, ...rest }) =>(
  <Route
  {...rest} 
  render = 
  { props => 
        isAuthenticated()? (
					<Component {...props} />
				):
				(
					<Redirect to ={{ pathname: "/", state: {from:props.location}}}/>
				)  
  }
  />
);


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    }
  }


  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/page1' component={ Page1 } />
          <PrivateRoute exact path='/page2' component={ Page2 } />
        </Switch>

      </div>
    );
  }
}

export default App;