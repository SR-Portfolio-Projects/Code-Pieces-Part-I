import React, { useState } from 'react';
import { usePieces } from '../../hooks/usePieces';
import moment from 'moment';
import LikePiece from './LikePiece'
import DeletePiece from './DeletePiece';
import EditPieceLink from './EditPieceLink';
import Comments from '../Comments';


const Piece = (props) => {
    const [liked, isLiked] = useState(false);
    const [pieces,
        //    setPieces, 
        //    handleCreate, 
           likePiece, 
           deletePiece
          ] = usePieces()
    // console.log(props.match.params.id)
    const id = props.match.params.id
    const piece = pieces.filter(piece => piece.id === id)
    // console.log(piece[0]);
    const clickedPiece = piece[0]
 

  return (
    <div className="piece">
    <div className="piece-info">
      <div className="piece-header">
        <div>
          <h3>{clickedPiece.title}</h3>
            <LikePiece
              likePiece= {() => likePiece(clickedPiece.id, { liked, isLiked })}
              numberOfLikes = { clickedPiece.likes }
              liked = { liked }
            />
        </div>
      <div>
      <p>Piece by { clickedPiece.user.displayName }</p>
      <p>{ moment(clickedPiece.createdAt).calendar() }</p>
      </div>
      </div>
      <div className="content">
        <DeletePiece deletePiece = { deletePiece }  />  
        <EditPieceLink/>
        <p>{  clickedPiece.content }</p>
      </div>
    </div>
          <Comments numOfComments = { clickedPiece.numOfComments } commentsList = {clickedPiece.commentsList} />
  </div>
  );
}

export default Piece;