import React, { useState } from 'react';
import { Link} from "react-router-dom"
import moment from 'moment';
import LikePiece from './LikePiece';
import Comments from '../Comments';
import DeletePiece from './DeletePiece';
import EditPieceLink from './EditPieceLink';

const PieceDetails = ({ piece, likePiece, deletePiece }) => {
  const [liked, isLiked] = useState(false);

  return (
    <div className="piece">
      <div className="piece-info">
        <div className="piece-header">
          <div>
          <Link to = {`/piece/${piece.id}`}>
            <h3>{piece.title}</h3>
            </Link>
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
        <div className="content">
          <div className = 'content-actions'>
            <DeletePiece deletePiece = {() => deletePiece(piece.id) } />  
            <EditPieceLink />

          </div>
          
          <p>{  piece.content }</p>
        </div>
      </div>
            <Comments numOfComments = { piece.numOfComments } commentsList = {piece.commentsList} />
    </div>
  );
};


export default PieceDetails;
