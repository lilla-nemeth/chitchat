import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomContextProvider from './context/RoomContext';

function App() {
	return (
		<>
			<RoomContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='chat' element={<Chat />} />
					</Routes>
				</BrowserRouter>
			</RoomContextProvider>
		</>
	);
}

export default App;
