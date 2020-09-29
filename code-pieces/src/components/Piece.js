import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const Piece = ({ title, content, user, createdAt, stars, comments }) => {
  return (
    <div className="piece">
      <div className="piece-info">
        <div className="piece-header">
          <div>
            <h3>{title}</h3>
            <div className="icons">
                  <span role="img" aria-label="star">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  </span>
                  {stars}
            
                  <span role="img" aria-label="comments">
                  <FontAwesomeIcon icon={faComments} />
                  </span>
                  {comments}
            </div>
          </div>
        <div>
        <p>Piece by {user.displayName}</p>
        <p>{moment(createdAt).calendar()}</p>
        </div>
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="piece-buttons">
          <button className="star">Like</button>
          <button className="delete">Delete</button>
      </div>
    </div>
  );
};

Piece.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0,
};

export default Piece;
