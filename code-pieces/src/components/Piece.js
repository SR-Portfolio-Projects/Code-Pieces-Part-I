import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const Piece = ({ piece }) => {

  return (
    <div className="piece">
      <div className="piece-info">
        <div className="piece-header">
          <div>
            <h3>{piece.title}</h3>
            <div className="icons">
                  <span role="img" aria-label="star">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  </span>
                  {piece.likes}
            
                  <span role="img" aria-label="comments">
                  <FontAwesomeIcon icon={faComments} />
                  </span>
                  {piece.comments}
            </div>
          </div>
        <div>
        <p>Piece by {piece.user.displayName}</p>
        <p>{moment(piece.createdAt).calendar()}</p>
        </div>
        </div>
        <div className="content">{piece.content}</div>
      </div>
      <div className="piece-buttons">
          <button className="star">Like</button>
          <button className="delete">Delete</button>
      </div>
    </div>
  );
};


export default Piece;
