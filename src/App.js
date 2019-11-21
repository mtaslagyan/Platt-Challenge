import React from 'react';
import Header from './components/Header';
import SecondNav from './components/SecondNav'
import Homepage from './components/home/Homepage'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <SecondNav />
      {/* Organizing the inner content like this will help later for routing. */}
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
