import './App.css';
import NavBar from "./components/navbar/NavBar";
import Home from './components/home/Home';
import Visualiser from './components/visualiser_page/Visualiser';
// import Footer from './components/Footer/Footer';
import React from 'react';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Routes */}
      <Routes>
        {/* <Route path = "/" element = {<Home />}></Route> */}
        {/* <Route path = "/"; */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/visualiser" element={<Visualiser />}></Route>
        {/* This is for the url */}
      </Routes>
      {/* footer */}
    </div>
  );
}

export default App;
