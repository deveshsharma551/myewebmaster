import React, { Component } from 'react';
import './App.css';
import Blog from './blog/Blog';
import { Switch, Route } from 'react-router-dom';
import AddressForm from './checkout/myAddressForm';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <img src="img/logo.svg" className="App-logo" alt="logo" /> */}
      <Switch>
       <Route exact path='/' component={Blog}/>
       <Route exact path='/registerForBlog' component={AddressForm}/>
      </Switch>
      </div>
    );
  }
}

export default App;
