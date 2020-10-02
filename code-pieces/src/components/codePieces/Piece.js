import React, { useState } from 'react';
import moment from 'moment';
import LikePiece from './LikePiece';
import Comments from '../Comments';
import DeletePiece from './DeletePiece';
import EditPiece from './EditPiece';

const Piece = ({ piece, likePiece, deletePiece }) => {
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
        <div className="content"><DeletePiece deletePiece = {() => deletePiece(piece.id) } />  <EditPiece />{  piece.content }</div>
      </div>
            <Comments numOfComments = { piece.numOfComments } commentsList = {piece.commentsList} />
    </div>
  );
};


export default Piece;
