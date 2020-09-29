import React, { useState } from 'react'
import Piece from './Piece';
import AddPiece from './AddPiece';


const Pieces = ({ pieces, onCreate }) => {

  return (
    <section className="Pieces">
      {pieces.map((piece, index) => <Piece  key={piece.id} piece= {piece}  />)}
      {/* {newPieces.map((piece, index) => <Piece key={piece.id} piece= {piece} />)} */}

      <AddPiece onCreate={onCreate} />
    </section>
  )
}

export default Pieces;
