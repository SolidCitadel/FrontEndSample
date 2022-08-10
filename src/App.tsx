import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/community/Community";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community/*" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
