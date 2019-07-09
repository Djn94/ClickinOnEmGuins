import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (<div className='pageDiv'>
    <h1> TESTING THE REACT SETUP</h1>
    <Navbar />
    <Header />
    <Container />
    <Footer />

  </div>
  );
}

export default App;
