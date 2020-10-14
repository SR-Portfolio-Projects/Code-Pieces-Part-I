import React, { useState } from 'react';
import moment from 'moment';
import LikePiece from './components/codePieces/LikePiece';
import Comments from './components/Comments';
import DeletePiece from './components/codePieces/DeletePiece';
import EditPieceLink from './components/codePieces/EditPieceLink';

const PD = ({ pieces, likePiece, deletePiece, match, location }) => {
  const [liked, isLiked] = useState(false);
  const {
    params: { id }
  } = match;
  console.log(id)

  
  const piece = pieces.filter(item => item.id === id)
  console.log(piece)


  
  return (
    <div className="piece">
      <div className="piece-info">
      
        <div className="piece-header">
          <div>
              
            <h3>{piece.title}</h3>
            <h1>Hello</h1>
              <LikePiece
                likePiece= {() => likePiece(piece.id, { liked, isLiked })}
                numberOfLikes = { piece.likes }
                liked = { liked }
              />
          </div>
        <div>
        {/* <p>Piece by { piece.user.displayName }</p> */}
        <p>{ moment(piece.createdAt).calendar() }</p>
        </div>
        </div>
        <div className="content">
          <DeletePiece deletePiece = {() => deletePiece(piece.id) } />  
          <EditPieceLink/>
          <p>{  piece.content }</p>
        </div>
      </div>
            {/* <Comments numOfComments = { piece.numOfComments } commentsList = {piece.commentsList} /> */}
    </div>
  );
};


export default PD;
