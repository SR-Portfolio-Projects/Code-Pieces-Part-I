import React from 'react'
import Piece from './Piece';
import AddPiece from './AddPiece';

const Pieces = ({ pieces, onCreate }) => {
  return (
    <section className="Pieces">
      {pieces.map(piece => <Piece {...piece} key={piece.id} />)}

      <AddPiece onCreate={onCreate} />
    </section>
  )
}

export default Pieces;
