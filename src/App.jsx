import { useState } from 'react'
import Eventform from './components/Eventform/Eventform'
import EventList from './components/EventList/EventList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Eventform />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
