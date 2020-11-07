import React from 'react'
import PieceDetails from './codePieces/PieceDetails';




const Pieces = ({ pieces, likePiece, deletePiece}) => {
  console.log(pieces);
  return (
    <div className="Pieces">
      
      
      {pieces && pieces.map((piece, index) => {

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

