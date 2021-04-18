//Landing page
//imports of classes to use on the landing page
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { Checklist } from './components/checklist';
import { Map } from './components/map';
import { Pedometer } from './components/pedometer';
import { Reviews } from './components/reviews';
import { Button } from 'react-bootstrap';//will allow user to switch component
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//component class
//main page of functionality, buttons change the classes on the main page 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2>
            🌊 Welcome to The Great Atlantic Way 🌊
        </h2>
          <Button href="/map" variant="success" size="lg">Map </Button>{' '}
          <Button href="/checklist" variant="success" size="lg"> Checklist </Button>
          <Button href="/pedometer" variant="success" size="lg"> Pedometer </Button>
          <Button href="/reviews" variant="success" size="lg"> Reviews</Button>
          <br></br>
          <Switch>
            <Route path='/map' component={Map} exact />
            <Route path='/checklist' component={Checklist} exact />
            <Route path='/pedometer' component={Pedometer} exact />
            <Route path='/reviews' component={Reviews} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
