import { Footer, Nav, Routelist } from 'frontend/component';
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routelist />
      <Footer />   
      <ToastContainer />
    </div>
  );
}

export default App;
