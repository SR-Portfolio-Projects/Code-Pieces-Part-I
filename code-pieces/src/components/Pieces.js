import React, { useState } from 'react'
import Piece from './Piece';
import AddPiece from './AddPiece';


const Pieces = ({ pieces, onCreate, likePiece }) => {

  return (
    <section className="Pieces">
      {pieces.map((piece, index) => <Piece  key={piece.id} piece= {piece}  likePiece = { likePiece } liked = {false} />)}
      <AddPiece onCreate={onCreate} />
    </section>
  )
}

export default Pieces;
