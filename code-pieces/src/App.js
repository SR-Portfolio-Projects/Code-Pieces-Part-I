import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { useHistory, Link } from 'react-router-dom';

import dummyPieces from './data'

import Pieces from './components/Pieces';


import './App.css';
import AddPiece from './components/codePieces/AddPiece';
import EditPiece from './components/codePieces/EditPiece';


const App = () => {
  const [ pieces, setPieces] = useState(dummyPieces)

  const history = useHistory()

  const handleCreate = piece => {
	setPieces([...pieces, piece])
	setTimeout(() => {
		history.push('/');
	  }, 100);
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

  const editPiece = (pieceId) => {
	  
  }

    return (
      <div className="App">
          <h1>Code Pieces</h1>
		  <Link to = '/addpiece'>
        	Add Piece
      	  </Link>
		  
		  <Switch>
		  	<Route path = '/editpiece/:id' render = {() => {
        		return (
          			<EditPiece />
        		)
      		}}/>

			<Route path = '/addpiece' render = {() => {
        		return (
          			<AddPiece  addPiece = { handleCreate }/>
        		)
      		}}/>

			<Route path = '/' render = { () => {
				return (
					<Pieces pieces = { pieces } 
						    setPieces = { setPieces }
				            likePiece = { likePiece } 
					/>

				)
			}} />

		</Switch>
      </div>
    );
  }

export default App;
