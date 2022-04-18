import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Chat from './components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

function App() {
  const socket = io('http://localhost:3003');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home socket={socket} />} />
          <Route
            path='chat/:room_id/:username'
            element={<Chat socket={socket} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
