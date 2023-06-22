import React from 'react'
import ChatPage from './pages/ChatPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/chat/:name" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
