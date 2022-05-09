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
          <Route path='chat/:room_id/:username' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
