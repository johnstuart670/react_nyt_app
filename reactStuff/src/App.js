import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage";
import SavedArticlesPage from "./Components/SavedArticlesPage";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" Component={LandingPage} />
						<Route exact path="/saved_articles" Component={SavedArticlesPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
