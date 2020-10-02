import React, { useState } from 'react'

import Piece from './codePieces/Piece';



const Pieces = ({ pieces, likePiece, deletePiece, editPiece }) => {

  return (
    <div className="Pieces">
      
      {pieces.map((piece, index) => {

        return <Piece  key= { piece.id } 
                      piece = { piece } 
                      deletePiece = { deletePiece } 
                      likePiece = { likePiece } 
                      liked = { false } />
      })}      
    </div>
  )
}

export default Pieces;
