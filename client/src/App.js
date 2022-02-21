import './App.css';
import Home from './Home';
import Chat from './Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" element={<Home />} />
		// 		<Route path="chat" element={<Chat />} />
		// 	</Routes>
		// </BrowserRouter>
		<>
			{/* <Chat /> */}
			<Home />
		</>
	);
}

export default App;
