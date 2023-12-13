import './App.css'
import Navbar from './tools/navbar'
import Home from './pages/home'
import Posts from './posts/posts'
import ASearchAlgorithm from './posts/a-search-algorithm'
import Challenges from './pages/challenges'
import Challenge1 from './challenges/challenge-1'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="/a-search-algorithm" element={<ASearchAlgorithm/>} />
            <Route path="/challenges" element={<Challenges/>} />
            <Route path="/challenge-1" element={<Challenge1/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
