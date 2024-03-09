import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';

import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import ExcerciseDetails from './pages/ExcerciseDetails';
const App = () => {
  return (
    <Router> 
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExcerciseDetails />} />
          </Routes>
          <Foot />
       </Box>
      </Router>
  );
}

export default App;