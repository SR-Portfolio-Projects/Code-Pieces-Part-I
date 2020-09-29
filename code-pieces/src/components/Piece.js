import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const Piece = ({ piece }) => {

  // const likePost = (postId, isLikedState) => {
	// 	const { liked, isLiked } = isLikedState;

	// 	const likedConditioning = (likedBool) => {
	// 		setPosts(
	// 			posts.map((post) => {
	// 				const changedValue =
	// 					likedBool !== true ? post.likes + 1 : post.likes - 1;
	// 				if (post.id === postId) {
	// 					return { ...post, likes: changedValue };
	// 				}
	// 				return post;
	// 			})
	// 		);
	// 	};

	// 	if (liked === false) {
	// 		likedConditioning(liked);
	// 	} else if (liked === true) {
	// 		likedConditioning(liked);
	// 	}
	// 	isLiked(!liked);
	// };

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

// Piece.defaultProps = {
//   title: 'JavaScript is Life',
//   content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
//   imageUrl:"https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80",
//   user: {
//     userId: '3',
//     userImage: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg",
//     displayName: 'Brittany Jackson',
//     email: 'brittany@email.com',
//   },
//   createdAt: new Date(),
//   likes: 0,
//   comments: 0,
// };

export default Piece;
