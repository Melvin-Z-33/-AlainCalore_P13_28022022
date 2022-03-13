import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './view/Home.jsx';
import Login from './view/Login.jsx';
import Profile from './view/Profile.jsx';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
