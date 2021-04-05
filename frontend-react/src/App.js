import logo from './logo.svg';
import './App.css';
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
					<div class="contDashboard">
						<CreateTasksComponent/>
						<FolderManagementComponent/>
					</div>
					<div class="contList">
						<ListTasksComponent/>
					</div>
				</div>
				<FooterComponent/>
			</div>
	);
}

export default App;
