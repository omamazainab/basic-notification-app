import React from 'react';
import './App.css';
// import Dinner from './Dinner.js'
import { initNotification } from './services/firebaseService'

function App() {
  return (
    // <Dinner dishName="chicken  biryani" />
    <button onClick={initNotification}> configure notifications </button>
  );
}

export default App;
