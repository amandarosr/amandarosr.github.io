import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cases from './pages/Cases';
import Projects from './pages/Projects';
import './App.css';

function App() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route path="/cases" element={ <Cases/> } />
          <Route path="/projects" element={ <Projects/> } />
        </Routes>
      </div>
    );
}

export default App;
