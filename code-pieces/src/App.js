import React, { Component, useState } from 'react';

import dummyPieces from './data'

import Pieces from './components/Pieces';


import './App.css';


const App = () => {
  const [ pieces, setPieces] = useState(dummyPieces)

  const handleCreate = piece => {
    setPieces([...pieces, piece])
  };

    return (
      <div className="App">
          <h1>Code Pieces</h1>
          <Pieces pieces={pieces} onCreate={handleCreate} />
      </div>
    );
  }

export default App;
