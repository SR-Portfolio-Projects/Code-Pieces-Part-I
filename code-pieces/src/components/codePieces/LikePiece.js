import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const LikePiece = (props) => {
	const { likePiece, numberOfLikes, liked } = props;

	return (
		<div className="like-section" key="likes-icons-container">
			<div onClick={likePiece} className="like-section-wrapper">
					<FontAwesomeIcon color = { liked === true ? "red" : "black"}
									 icon={faThumbsUp}
					/>
					
			</div>
			<span className="like-number">{ numberOfLikes }</span>
		</div>
	);
};

export default LikePiece;