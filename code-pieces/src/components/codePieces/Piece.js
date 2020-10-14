import React, { useState} from 'react';
import { usePieces } from '../../hooks/usePieces';
import moment from 'moment';
import LikePiece from './LikePiece'
import DeletePiece from './DeletePiece';
import EditPieceLink from './EditPieceLink';
import Comments from '../Comments';
import { useHistory } from 'react-router';


const Piece = (props) => {
    const [liked, isLiked] = useState(false);

    const [pieces, 
          ] = usePieces()
          
    const id = props.match.params.id
    const piece = pieces.filter(item => item.id === id)
    const clickedPiece = piece[0]
    console.log(pieces);
 
    const history = useHistory()
    const handleDelete = () => {
      props.deletePiece(clickedPiece.id)
      setTimeout(() => {
        history.push("/pieces");
      }, 500);


    }

  return (
    <div className="piece">
    <div className="piece-info">
      <div className="piece-header">
        <div>
          <h3>{clickedPiece.title}</h3>
            <LikePiece
              likePiece= {() => props.likePiece(clickedPiece.id, { liked, isLiked })}
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
        <div className = 'content-actions'>
          <DeletePiece deletePiece = {() => handleDelete() }  />  
          <EditPieceLink/>

        </div>
        
        <p>{  clickedPiece.content }</p>
      </div>
    </div>
          <Comments numOfComments = { clickedPiece.numOfComments } commentsList = {clickedPiece.commentsList} />
  </div>
  );
}

export default Piece;