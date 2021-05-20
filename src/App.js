//Landing page
//imports of classes to use on the landing page
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { Checklist } from './components/checklist';
import Map from './components/map';
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
					<div className="bg-gradient-to-r shadow-lg from-red-400 to-blue-800 text-white mb-4">
						<h2 className="text-4xl font-light py-4">
							🌊 Welcome to The Wild Atlantic Way 🌊
						</h2>

						
						<div className="flex-auto w-full text-xl space gap-1 pb-4 space-x-10 font-semibold">
							<Button className="hover:text-blue-400" href="/map" size="lg">Map </Button>
							<Button className="hover:text-blue-400" href="/checklist" size="lg"> Checklist </Button>
							<Button className="hover:text-blue-400" href="/reviews" size="lg"> Reviews</Button>
						</div>
					</div>

					<Switch>
						<Route path='/map' component={Map} exact />
						<Route path='/checklist' component={Checklist} exact />
						<Route path='/reviews' component={Reviews} exact />
					</Switch>
				</div>
			</BrowserRouter>

		);
	}
}

export default App;
