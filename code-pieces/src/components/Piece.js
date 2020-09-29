import React, { useState } from 'react';
import moment from 'moment';
import LikePiece from './LikePiece';

const Piece = ({ piece, likePiece }) => {
  const [liked, isLiked] = useState(false);

  return (
    <div className="piece">
      <div className="piece-info">
        <div className="piece-header">
          <div>
            <h3>{piece.title}</h3>
              <LikePiece
                likePiece= {() => likePiece(piece.id, { liked, isLiked })}
                numberOfLikes = { piece.likes }
                liked = { liked }
              />
          </div>
        <div>
        <p>Piece by { piece.user.displayName }</p>
        <p>{ moment(piece.createdAt).calendar() }</p>
        </div>
        </div>
        <div className="content">{  piece.content }</div>
      </div>
    </div>
  );
};


export default Piece;
