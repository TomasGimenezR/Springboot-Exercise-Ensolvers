import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTasksComponent from './components/ListTasksComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
	return (
		<Router>
				<div className="App">
					<HeaderComponent/>
					<div className="container">
						<Switch>
							<Route path="/" component={ListTasksComponent}></Route>
							<ListTasksComponent/>
						</Switch>
					</div>
					<FooterComponent/>
				</div>
		</Router>
	);
}

export default App;
