import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { useHistory, Link } from 'react-router-dom';

// import dummyPieces from './data'

import { usePieces } from './hooks/usePieces'
import Pieces from './components/Pieces';


import './App.css';
import AddPiece from './components/codePieces/AddPiece';
import EditPieceForm from './components/codePieces/EditPieceForm';
import Menu from './components/Menu';


const App = () => {
  const [ pieces, setPieces, handleCreate] = usePieces()
  

//   const history = useHistory()

//   const handleCreate = piece => {
// 	setPieces([...pieces, piece])
// 	setTimeout(() => {
// 		history.push('/');
// 	  }, 100);
//   };

//   const handleEdit = pieceId => {
// 	  alert("On the way")
//   }

  

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

	const deletePiece = (clickedPiece) => {
		alert('Are you sure?')
		setPieces(
			pieces.filter(piece => piece.id !== clickedPiece)
		)
	}

 

    return (
      <div className="App">
		  <Menu />
		  <Switch>
		  	<Route path = '/editpieceform' render = {() => {
        		return (
          			<EditPieceForm/>
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
							deletePiece = { deletePiece }
							
					/>

				)
			}} />

		</Switch>
      </div>
    );
  }

export default App;
 