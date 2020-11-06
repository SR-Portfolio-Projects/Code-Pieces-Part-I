import React, { useState} from 'react';
import { usePieces } from '../../hooks/usePieces';
import moment from 'moment';
import LikePiece from './LikePiece'
import DeletePiece2 from './DeletePiece2';
import EditPieceLink from './EditPieceLink';
import Comments from '../Comments';
import { useHistory } from 'react-router';


const Piece = (props) => {
    const [liked, isLiked] = useState(false);
          console.log(props.pieces);
    const id = props.match.params.id
    console.log(id);
    const piece = props.pieces.filter(item => item.id === id)
    console.log(piece);
    const clickedPiece = piece[0]
    console.log(clickedPiece);
 
    const history = useHistory()


    const handleDelete = () => {
      props.deletePiece(clickedPiece.id)
      setTimeout(() => {
        history.push("/pieces");
      }, 30);
      console.log(clickedPiece);

    }

  return (
    <div className="piece">
      {(clickedPiece) ? 
      <>
    <div className="piece-info">
      <div className="piece-header">
        <div>
          <h3>{clickedPiece.title}</h3>
            
        </div>
        <div>
          <p>Piece by { clickedPiece.user.displayName }</p>
          <p>{ moment(clickedPiece.createdAt).calendar() }</p>
        </div>
      </div>
      <div className="content">
        <div className = 'content-actions'>
          <DeletePiece2  clickedPiece = { clickedPiece } deletePiece = {handleDelete}/>  
          <EditPieceLink/>

        </div>
        
        <p>{  clickedPiece.content }</p>
      </div>
    </div>
    <div className = 'bottom-actions'>
          <LikePiece
                    likePiece= {() => props.likePiece(clickedPiece.id, { liked, isLiked })}
                    numberOfLikes = { clickedPiece.likes }
                    liked = { liked }
                  />
          <Comments numOfComments = { clickedPiece.numOfComments } commentsList = {clickedPiece.commentsList} />

    </div>
    </>
    : null}
  </div>
  );
}

export default Piece;