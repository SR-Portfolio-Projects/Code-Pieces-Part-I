import React, { useState } from 'react'
import Piece from './codePieces/Piece';
import AddPiece from './codePieces/AddPiece';


const Pieces = ({ pieces, addPiece, likePiece, setPieces }) => {

  return (
    <div className="Pieces">
      {pieces.map((piece, index) => {
      return <Piece  key= { piece.id } 
                     piece = { piece }  
                     likePiece = { likePiece } 
                     liked = { false } />
      })}
      
    
      <AddPiece addPiece = { addPiece} />
    </div>
  )
}

export default Pieces;
