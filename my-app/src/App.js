import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Card from './components/card/card';
import penguins from './penguins.json';
class App extends React.Component {
  state = { penguins }
  render() {
    return (<div className='pageDiv' >
      <Navbar />
      <Header />

      <Container />
      <Card />

      <Footer />

    </div>
    );
  }
}

export default App;
