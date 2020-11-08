import React from 'react';
import { Route, Switch } from 'react-router';

import { usePieces } from './hooks/usePieces'
import Pieces from './components/Pieces';


import './App.css';
import AddPiece from './components/codePieces/AddPiece';
import EditPieceForm from './components/codePieces/EditPieceForm';
import Menu from './components/Menu';
import Piece from './components/codePieces/Piece';
import Landing from './components/loginandregister/components/Landing';
import UserHome from './components/UserHomePage';

const App = () => {
  const [ pieces,
		  setPieces,
		  getPieces, 
		  handleCreate, 
		  likePiece, 
		  deletePiece
		] = usePieces()

		
    return (
      <div className="App">
		  <Menu />
		  <Switch>
			  <Route path = '/userhome' component = { UserHome }/>
		  	<Route path = '/editpieceform' render = {() => {
					return (
						<EditPieceForm/>
					)
				}}
			/>

			<Route path = '/addpiece' render = {() => {
					return (
						<AddPiece  addPiece = { handleCreate }/>
					)
				}}
			/>


			<Route path = '/piece/:id' render = {(props) => {
					return (
								<Piece {...props} pieces = {pieces} 
												  setPieces = { setPieces }
												  getPieces = {getPieces} 
												  deletePiece = { deletePiece }
												  likePiece = { likePiece } 
								/>
							)
					}}
			/>
			<Route path = '/pieces' render = { () => {
					return (
								<Pieces pieces = { pieces } 
										setPieces = { setPieces }
										likePiece = { likePiece } 
										deletePiece = { deletePiece }
										
								/>

						)
					}} 
			/>
			<Route exact path ='/' component = { Landing } />

		</Switch>
      </div>
    );
  }

export default App;
 