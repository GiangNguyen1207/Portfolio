import React from 'react';

import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Routes from './Routes'
import './App.scss'

function App() {
  return (
    <>
      <AppBar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
