import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='chat/:id' element={<Chat />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
