import React, { Component, useState } from 'react';

import dummyPieces from './data'

import Pieces from './components/Pieces';


import './App.css';


const App = () => {
  const [ pieces, setPieces] = useState(dummyPieces)

  const handleCreate = piece => {
    setPieces([...pieces, piece])
  };

  const likePiece = (pieceId, isLikedState) => {
		const { liked, isLiked } = isLikedState;

		const likedConditioning = (likedBool) => {
			setPieces(
				pieces.map((piece) => {
					const changedValue =
						likedBool !== true ? piece.likes + 1 : piece.likes - 1;
					if (piece.id === pieceId) {
						return { ...piece, likes: changedValue };
					}
					return piece;
				})
			);
		};

		if (liked === false) {
			likedConditioning(liked);
		} else if (liked === true) {
			likedConditioning(liked);
		}
		isLiked(!liked);
	};

    return (
      <div className="App">
          <h1>Code Pieces</h1>
		  <Pieces pieces = { pieces } 
		  		  setPieces = { setPieces }
				  addPiece = { handleCreate }
				  likePiece = { likePiece } />
      </div>
    );
  }

export default App;
