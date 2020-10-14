import React from 'react'
import PieceDetails from './codePieces/PieceDetails';
import PiecesHeader from './codePieces/PiecesHeader';



const Pieces = ({ pieces, likePiece, deletePiece}) => {

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

