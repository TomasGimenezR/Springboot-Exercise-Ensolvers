import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';

function App() {
	return (
		<div className="App">
			<HeaderComponent/>
				<ContentComponent/>
			<FooterComponent/>
		</div>
	);
}

export default App;
