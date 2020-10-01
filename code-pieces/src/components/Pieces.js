import React, { useState } from 'react'

import Piece from './codePieces/Piece';



const Pieces = ({ pieces, likePiece }) => {

  return (
    <div className="Pieces">
      
      {pieces.map((piece, index) => {

        return <Piece  key= { piece.id } 
                      piece = { piece }  
                      likePiece = { likePiece } 
                      liked = { false } />
      })}      
    </div>
  )
}

export default Pieces;
