import React, { useState } from 'react'
import { Link, Route } from "react-router-dom"
import PD from '../PD';
import PieceDetails from './codePieces/PieceDetails';
import PiecesHeader from './codePieces/PiecesHeader';



const Pieces = ({ pieces, likePiece, deletePiece, editPiece }) => {

  return (
    <div className="Pieces">
      <PiecesHeader />
      
      {pieces.map((piece, index) => {

        return (
        
        <PieceDetails  key= { piece.id } 
                      piece = { piece } 
                      deletePiece = { deletePiece } 
                      likePiece = { likePiece } 
                      liked = { false } />
                      )
      })}      


    </div>
  )
}

export default Pieces;

function Piece2({ movie }) {

  const { title, content } = movie;

  return (
    <Link to = {`/movies/${movie.id}`}>

        <div className="movie-card">
        
        </div>

    </Link>
  );
}



