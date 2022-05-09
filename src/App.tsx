import { Footer, Loader, Nav, Routelist } from 'frontend/component';
import { useAppSelector } from 'frontend/utility';
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {

  const { loader } = useAppSelector(state => state.user)

  return (
    <div className="App">
      <Nav />
      <Routelist />
      <Footer />   
      {loader && <Loader />}
      <ToastContainer />
    </div>
  );
}

export default App;
