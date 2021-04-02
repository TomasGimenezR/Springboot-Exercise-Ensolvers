import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTasksComponent from './components/ListTasksComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTasksComponent from './components/CreateTasksComponent';
import FolderManagementComponent from './components/FolderManagementComponent';

function App() {
	return (
			<div className="App">
				<HeaderComponent/>
				<div className="container">
					<ListTasksComponent/>
					<CreateTasksComponent/>
					<FolderManagementComponent/>
				</div>
				<FooterComponent/>
			</div>
	);
}

export default App;
